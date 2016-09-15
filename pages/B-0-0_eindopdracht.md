---
layout    : page
title     : Eindopdracht
title_long: Eindopdracht WEBIII
permalink : eindopdracht/
published : true
tags      :
---

|Info|   |
|----|---|
|Olod|CMP I|
|Auteur(s)|Bart Missant, Stijn Anseel, Evelien Rutsaert|
|Opleiding|Bachelor in de Grafische en digitale media|
|Academiejaar|2016-17|
|Werktitel|Festival|
|Subtitel|Festival website|
|Briefing|**Week 2**|
|Milestone 1|**TBC** Finale HTML 5 template|
|Milestone 2|**TBC** Wordpress template|
|Milestone 3|**TBC** Alpha versie van je website|
|Deadline|**TBC** Finale oplevering|
{:.table}

Puntentelling
-------------

|Onderdeel|Punten|
|---------|------|
|Eindopdracht|75%|
|Mondeling|25%|
{:.table}

Het uiteindelijke eindresultaat wordt herleid naar punten op 20 en afgerond tot een geheel getal.

Milestones
----------

Tussentijdse milestones worden ingediend (gecommit) naar je bitbucket voor het einde van de opgegeven datum.
Niet of laattijdig opleveren van een milestone = -7 (op 70) van je eindopdracht.

Finale oplevering (deadline)
----------------------------

Voor onderstaande stappen uit voor het einde van de deadline.

### OneDrive
Zip je volledige project met de juiste [folder structuur](https://github.com/gdmgent/cmp2/blob/master/pages/eindopdracht.md#folderstructuur) en deel deze via OneDrive.

### Online hosting
Upload je website en database naar een hosting (bv byethost, eigen domein, ...)

### Chamilo
- Link van online deployment
- Link naar de zip file op OneDrive



Omschrijving
------------

De eindopdracht voor de 1e zittijd bestaat eruit om een festival website te maken, configureren en online te deployen en dit uitgewerkt met het CMS WordPress.


Functionele specificaties
-------------------------

Verplichte onderdelen voor deze webapplicatie:

- Ontwerp een logo.
- Voorzie fav- en appicons.
- Je dient een eigen template te ontwerpen welke je uitwerkt in HTML 5. **Een gratis template of betaalde template levert 0 punten op voor de eindopdracht.**
- Je uitgewerkte HTML 5 template zet je dan om in een WordPress template welke je dan ook installeert en activeert op je website.
- Je hebt in totaal 2 templates geïnstalleerd (eigen en een default template).
- Je maakt een gebruiker aan met de naam 'gdmdocent' welke het wachtwoord gdmD0c3n! gebruikt. Deze gebruiker bezit administratorrechten.
- Je website bevat de mogelijkheid om artisten aan te maken en te beheren. Maak hiervoor gebruik van een *custom post type*
- Voorzie de mogelijkheid om artisten op te splitsen in minstens 3 verschillende podia of dagen aan de hand van categorieën.
- Voorzie minstens volgende items in het hoofdmenu van de website:
    - Homepagina: met 3 recente blogberichten
    - Blog: alle blogberichten voorzien van paginatie (5 berichten/pagina)
    - Podia: met een overzicht van alle artisten per podia
    - About: Over het festival
    - Koop Tickets. Een formulier waarop men tickets kan bestellen
    - Contact
        - Contactgegevens
        - Google maps
        - Voorzie een contactformulier met velden (naam, voornaam, e-mailadres, telefoonnr., Skype, Twitter, bericht en onderwerp).
- De website dient minimaal 6 blogberichten te bevatten
- De website dient minimaal 9 artisten te hebben
- Voorzie een artist detailpagina met
    - Votes: Bezoekers van uw website moeten een artisten kunnen 'liken'
    - Een integratie met Spotify, YouTube en/of andere dienst
- Maak een footermenu met volgende items:
    - Contact
    - Disclaimer met daarin onderandere vermeld dat de website voor educatieve doeleinden gemaakt is.
    - Privacy policy
- Zorg voor sociale media integratie (social media links + Twitter feed en/of Facebook feed).
- Voeg extra functionaliteit toe om een hoger eindresultaat te bekomen.
- Deploy de website online.
- Werk alle stappen uit in een productiedossier.
- Een RSS feed van de blogberichten en dient weergegeven te worden in footer.
- Test alles (contactformulier, forum, projecten ingeven, ... ) uitvoerig.

Productdossier
--------------

- Voorpagina met titel, docent, OLOD, academiejaar, student, e-mailadres student en klas.
- Specificaties (welke functionaliteiten zijn er uitgewerkt).
- Moodboard.
- Wireframes.
- Sitemap.
- Style tiles.
- Design (screenshots, resultaat in HTML 5 en dan ten slotte in WordPress, minimaal 2).
- Oplijsting template files (via een hiërarchiesch schema)
- Gekozen plugins en motivering waarom deze gebruikt zijn.
- Besluit (welke waren de moeilijkste delen om uit te werken, problemen, voor- en nadelen,...)
- Oplijsting gebruikte plugins
- Tijdsbesteding

Timesheet
----------

> Klanten/werkgevers weten graag hoe lang je aan iets zal werken en hoe lang je er effectief aan gewerkt hebt. Een realistische inschatting maken van hoelang iets zal duren kan enkel op basis van (lange) werkervaring. Daarom is het belangrijk dat je nu al bijhoudt hoe lang iets duurt, zodat je deze skill leert. Dit is geen plezante bezigheid, maar maak er een gewoonte van om dit fequent bij te houden. Achteraf nog weten hoelang je aan iets gewerkt hebt is vaak nog lastiger.

Houd dagelijks een timesheet bij in Excel en post naar je Bitbucket-repository. Vermeld **per dag** de (deel)functionaliteit(en) waaraan je gewerkt hebt en hoe lang (de kleinste opdeling is een kwartier: 0,25 uur).

### Prestatieuren

Iedere student moet minimaal 80 uur besteden aan deze opdracht buiten de lesuren.

### Voorbeeld

|Datum|Student|Domein|Taak|Tijd|
|----:|:------|:-----|:--|----:|
|2016-04-23|Dieter De Weirdt|DES|Homepagina ontwerp|3,75 uur|
|2016-04-22|Dieter De Weirdt|DEV|Aanmaken docent account|0,25 uur|
||||**Totaal**|**306 uur**|
{:.table}

Folderstructuur
---------------

- Folder template_html5: met daarin de HTML 5 template (1 HTML file, index.html) en al zijn onderdelen (JS, CSS, afbeeldingen, logo,...).
- Folder template_wp: met daarin de WordPress template en al zijn onderdelen (verschillende template files, JS, CSS, logo, screenshot, icon,...).
- Folder wordpress: met daarin de totale WordPress site (inclusief template, include, plugins,...).
- Folder productiedossier: met daarin
    - productiedossier.pdf
    - timesheet.xls
    - eventuele andere bijlagen.
- Folder db: met daarin een export van de database. (databank.sql)

**Geen bronbestanden zoals Photoshop, Indesign, Illustrator, ...**
**Als er bestanden ontbreken kan er niet overgegaan worden tot quotering op dat rechtstreeks of onrechtstreeks deel.**

