JAVASCRIPT 2 INLÄMMNING
innehåll i README.md
1. Loggbok För G och VG
2. Beskriv och motivera de val som gjorts gällande ramverk, bibliotek och struktur för projektet


----------------- 1. Loggbok----------------------
2024.10.25
Försökte skriva koden direkt med React men insåg att det blev för avancerat just nu.

2024.10.27
Valde att fokusera på G-uppgiften.
Installerade ESLint och startade ett nytt projekt där jag klistrade in den befintliga HTML- och CSS-koden.
Lade till type="module" i index.html.
Skapade en metod för att hämta data om filmerna och tog bort den lokala JSON-filen för att i stället fetcha från en online JSON-fil.
Tog bort HTML-koden för dropdownmenyn för filmalternativ för att kunna visa filmerna som hämtas från JSON-filen.

2024.10.31
Skapade en funktion som håller koll på hur många säten användaren har valt.

2024.11.03
Tyckte att det var för mycket kod i HTML-filen, så jag valde att skapa en funktion som genererar alla säten.
Hårdkodade de ockuperade sätena.
Skapade en funktion som uppdaterar pris och filmtitel när användaren byter film.
Lade även till en funktion som rensar de tidigare valda sätena när användaren byter film.
Fixade koden med ESLint.

2024.11.04
All kod låg i en enda JS-fil, så jag ville dela upp den i moduler för bättre läsbarhet.
Försökte flytta fetch-metoden och filmdata till en egen JS-fil, men kunde inte visa hämtad data.
Löste det genom att skriva hela sökvägen i importen och lägga till ".js" i slutet för att det skulle fungera.

2024.11.05
Ville flytta all kod som hanterar sätena till en egen JS-fil.
Problem: biljettpriset visades inte.
Skapade en funktion som håller koll på filmpriset.

2024.11.06
Klar med G-uppgifterna.

2024.11.08
Försökte uppnå VG-målen med Angular men det lyckades inte, så jag valde att testa React i stället.
Installerade Vite, ESLint och Formik.
Lade in koden från G-projektet.
Skapade nya JSX-filer och delade upp koden i fler komponenter.
Koden fungerade inte ännu, behövde fixa import/export.

2024.11.09
Valde att använda useState för att kunna skicka vidare information mellan filerna.

2024.11.10
Lade till useState för att hantera tillstånd mellan olika filer och möjliggöra kommunikation mellan komponenter.
Fortsatte felsöka import- och exportproblem för att säkerställa att komponenter och data flödar korrekt genom appen.

2024.11.11
Jag använde Formik för formulärhantering och modifierade valideringsfunktionerna vi fick på föreläsningen för att de bättre skulle passa inlämningsuppgiften, särskilt för fälten för namn och telefonnummer.

2024.11.12
Jag publicerade projektet med GitHub Pages för att göra det enkelt åtkomligt online. Stötte på ett problem under publiceringen där namnet på filen var för långt, vilket orsakade ett fel som förhindrade publiceringen. Efter att jag bytte namn på mappen med den långa filvägen lyckades jag publicera projektet utan problem.

--------------- 2. Beskriv och motivera de val som gjorts gällande ramverk, bibliotek och struktur för projektet---------------------------------------------

Jag valde att använda react som ramverk eftersom den är komponentbaserad och kan lättare hantera olika delar som säten, formulär och när använder väljer olika filmer. jag har använt useState för att hålla koll på sätena, om de är lediga eller inte, hantera biljetpriser och hålla koll på om formuläret ska visas eller inte. 

useEffect använder jag för att generera sätena, hämta filmer, vilket gör att filmdata laddas in automatiskt utan att användaren behöver göra något.Återställa de valda sätena om användaren byter biljettpris. Denna useEffect återställer alla tidigare valda säten när en ny film (och därmed ett nytt biljettpris) väljs, vilket gör att användaren får en ny start vid byte av film.


Jag jag valde att använda Formik för att hantera formulär och validering. Formik gör det enkelt att hantera formulärinmatning och validering. 

Strukturmässigt delade jag upp projektet i flera komponenter, såsom SeatRow, MovieSelect, Form och Seat, för att underlätta läsbarhet och återanvändning. Genom att bryta ned koden i mindre delar har jag skapat en modulär struktur som är lätt att förstå och underhålla. Jag använde även ESLint för att säkerställa att koden följer bästa praxis och är konsekvent i syntax och stil.











# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


