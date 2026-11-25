# BrightGuide Daily — GitHub Pages Blog Site (poora package)

## GitHub par upload kaise karein
1. GitHub par new repository banao, naam example: `brightguidedaily.github.io` (yehi recommended hai — main domain isi par banta hai).
2. Is ZIP ki SAARI files repository mein upload karo (folders ke sath: ads, assets, posts).
3. Repository > Settings > Pages > Source: `main` branch, folder `/ (root)` select karke Save.
4. 1-2 minute mein site live: `https://brightguidedaily.github.io/.

## Ad kahan aur kaise lagayein (5 positions — har position ki ALAG file)
| File | Position |
|---|---|
| `ads/ad-header-top.html` | Header ke sab se upar |
| `ads/ad-below-header.html` | Header ke neeche |
| `ads/ad-before-image.html` | Article mein featured image se pehle |
| `ads/ad-between-posts.html` | Home page par posts ke darmiyan |
| `ads/ad-footer.html` | Footer se upar |
- Sirf us file ko kholo, apna ad code (AdSense/Ad Manager) paste karo, save/commit karo — ad usi position par show hoga.
- File khaali (sirf comment) rakho ge to woh jagah bilkul show nahi hogi, koi blank space nahi aayega.
- Between-posts numbering: `assets/js/main.js` mein `SITE.betweenPostsEvery: 3` — 3 ki jagah 4 ya 5 likhne se har 4/5 posts ke baad ad aayega.

## ads.txt
Root mein `ads.txt` file maujood hai. Us mein `pub-XXXXXXXXXXXXXXXX` ki jagah apna asal Publisher ID likhna ZAROORI hai, warna ads approve nahi honge.

## AdSense approval ke liye
- About, Contact, Privacy Policy, Terms, Disclaimer pages pehle se maujood hain.
- 22 original articles pehle se publish hain (`posts/` folder). Approval se pehle apne aur original articles add karte raho — copy-paste content kabhi mat lagana.
- Favicon pehle se laga hai (`assets/favicon.png`, navy B logo) — badalna ho to isi naam se apni PNG rakh do.
- Indexing ke liye `sitemap.html` page aur `sitemap.xml` dono maujood hain; Search Console mein sitemap.xml submit karna.
- Site ka naam/logo badalna ho to har page ke header mein `BrightGuide Daily` text aur `assets/css/style.css` mein rang (navy/gold) badal sakte ho.
- Email: `contact.html` mein example email ki jagah apna asal email likho.
- sitemap.xml aur robots.txt mein `YOUR-USERNAME` ki jagah apna GitHub username/repo likho.

## Naya article kaise add karein
1. `posts/` mein kisi maujooda article ki copy banao, naam badlo.
2. Title, date, text aur image wala hissa edit karo.
3. `index.html` mein usi tarah ka ek card add karo (title, link, short description).
