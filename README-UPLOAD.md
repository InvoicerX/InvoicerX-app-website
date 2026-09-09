# Invoicer X — GitHub Pages paket

1. Raspakiraj ZIP. Otvori index.html dvoklikom za lokalni pregled; terminal nije potreban.
2. U GitHub repozitoriju InvoicerX-app-website prenesi SADRŽAJ ove mape u korijen repozitorija: index.html mora biti odmah u korijenu, ne u dodatnoj podmapi. Uključi images, fonts, .nojekyll i ostale datoteke. Nemoj uploadati ZIP kao zamjenu za datoteke.
3. Settings → Pages → Deploy from a branch → main → /(root) → Save. Ako se grana drukčije zove, odaberi granu na koju si prenio datoteke.
4. Očekivana adresa: https://invoicerx.github.io/InvoicerX-app-website/
5. Nakon objave otvori Privacy i Terms iz podnožja. U Search Consoleu prijavi https://invoicerx.github.io/InvoicerX-app-website/sitemap.xml. Sačuvana je postojeća Google verification datoteka.

Nije potreban Node, VSC, npm, server aplikacije niti build na GitHubu. script.js je gotova skripta za galeriju, teme, FAQ i dijaloge. Slike su PNG i SVG, a fontovi WOFF2. Ništa nije objavljeno automatski.

Privacy i Terms imaju novi izgled i lokalne poveznice; tekst je sačuvan iz izvornog sajta. Prije produkcijske objave treba uskladiti stari pravni tekst: Terms još navodi 3-day trial i staru kontakt-adresu, Privacy navodi localStorage i tvrdnju o neuporabi third-party API-ja. To ne opisuje u cijelosti novu nativnu aplikaciju s Google Play Billingom. Ovim paketom nije provedena pravna revizija niti promjena uvjeta.

Početna stranica i dalje jasno označava novu aplikaciju kao razvojni pregled. Prikazi su postojeći SVG dizajni. Cijena se provjerava na Google Playu; uvjeti stare objavljene aplikacije nisu zamijenjeni uvjetima još neobjavljene nove verzije.

Kontakt koristi postojeći Formspree endpoint; slanje i YouTube trailer trebaju internet. Poruka nije poslana tijekom provjere. Vanjske usluge nisu kopirane u paket.

robots.txt na GitHub project sajtu nije robots.txt korijena domene; sitemap prijavi izravno Search Consoleu. Ako promijeniš naziv repozitorija ili domenu, ažuriraj canonical/og URL-ove u HTML-u, sitemap.xml, robots.txt i apsolutne poveznice u 404.html.
