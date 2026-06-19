/**
 * lifewallet waiting-list capture — Google Apps Script web app.
 *
 * SETUP (all inside the Sheet — no Google Cloud Console):
 *   1. Open the target Google Sheet. Row 1 headers: Timestamp | Email | Name.
 *   2. Extensions → Apps Script. Delete the stub, paste this file, Save.
 *   3. Deploy → New deployment → type "Web app".
 *        - Execute as: Me
 *        - Who has access: Anyone
 *      Deploy, authorise, and copy the "/exec" Web app URL.
 *   4. Put that URL in the site's .env.local as WAITLIST_WEBHOOK_URL.
 *
 * The Next.js route (src/app/api/waitlist/route.ts) POSTs { email, name, secret }
 * here server-side, so this URL is never seen by browsers.
 *
 * SHARED SECRET (optional but recommended): paste the same value you set as
 * WAITLIST_WEBHOOK_SECRET in the site's env into SHARED_SECRET below, then
 * redeploy (Deploy → Manage deployments → edit → Version: New version — the
 * /exec URL stays the same). Leave it "" to disable the check. NEVER commit the
 * real value to git — keep this file's placeholder empty in the repo.
 */
var SHARED_SECRET = "";

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    // Reject direct POSTs to the public /exec URL once a secret is configured.
    if (SHARED_SECRET && data.secret !== SHARED_SECRET) {
      return json({ error: "unauthorized" });
    }

    var email = (data.email || "").toString().trim();
    if (!email) {
      return json({ error: "email required" });
    }

    // First sheet — robust to locale (German names it "Tabelle1", not "Sheet1").
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    sheet.appendRow([new Date(), email, (data.name || "").toString()]);

    return json({ success: true });
  } catch (err) {
    return json({ error: String(err) });
  }
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
