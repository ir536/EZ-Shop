# EZ Shop — free static website

## Launch on GitHub Pages
1. Create a **public** GitHub repository named `ez-shop`.
2. Upload `index.html` and `data.js` to the repository root (not the ZIP).
3. Go to **Settings → Pages → Build and deployment**. Select **Deploy from a branch**, **main**, **/(root)**, and Save.
4. Leave **Custom domain** blank. Your URL is `https://YOUR-USERNAME.github.io/ez-shop/`.

## Update your catalog
Open `data.js` on GitHub, click the pencil/Edit icon, change products and offers, and **Commit changes**. GitHub Pages will republish the updated data.

- `vinyl`: name, code, finish, hex preview, image, description
- `parts`: name, fitment, image, description
- `builds`: vehicle, color, handle, image (only after customer permission)
- `promos`: code, title, description (codes are reviewed manually)
- `settings.email`: **required** for email inquiry buttons to work
- `settings.instagram`: optional Instagram URL

To upload a photo, create an `images` folder in your repository and upload your image there, then set `image: "images/filename.jpg"` in `data.js`. Use photos you have permission to publish.

## Limitations
- The inquiry form opens the visitor's email app; it does **not** send an email from the site itself.
- No online payments, accounts, automatic discount validation, or built-in private admin dashboard.
- GitHub Pages is public and static. Never store passwords, confidential customer data, or private supplier documents in the repository.
- Demo products are illustrative only. Replace them before advertising actual inventory.
