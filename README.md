# Functions Bootcamp
## Övning 1
Skriv en funktion som tar en sträng som parameter och returnerar längden på en sträng.
Anropa funktion och console.log svaret. Tips! Du kan skriva `.length` på en variabel som är en sträng för att få längden.

## Övning 2
  Skriv en funktion som plockar ut året från en sträng i datumformat. Använd `substring(startIndex, endIndex)` https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring. 
  Funktionen ska ta en parameter, som ska vara en sträng. Strängen ska alltid ha 10 tecken och följa mönstret 'YYYY-MM-DD'. Man ska kunna skriva year('2019-10-14') och få talet 2019 som resultat.

## Övning 3
  Skriv en funktion som tar tre parametrar. De första två är två tal och den sista är en operator d.v.s antingen '+', '-', '/', '*'. 
  Utför beräkningen och returnera summan och skriv ut. Det ska enbart gå att skicka med siffror (förutom operanden som är en sträng då) och varje operation ska vara sin egen funktion.
  Tips! Här kan `typeof` vara bra att använda https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
  Grunden till denna övningen, samt intruktioner finner du i mappen miniräknare.

## Övning 4
Gör om ditt sten, sax och påse - spel så du använder funktioner och försöker återanvända kod.

## Övning 5
Split the Nota! 
Split the nota räknar ut hur mycket varje vän ska betala på exempelvis en restaurang när notan kommer. Användaren skall kunna mata in summan, antal vänner och sedan dricks (som skrivs i decimalform d.v.s 10% blir 0.10), och får då tillbaks hur mycket varje person i sällskapet skall betala. 

## Övning 6 - Level Up
I denna övning så ska du skapa ett spel baserat på ett ordpussel skapat av Lewis Carroll.

### Vad

Lewis Carroll är förmodligen mest känd som författaren bakom Alice i underlandet men han var även matematiker och hade en förkärlek för ordlekar, logik och fantasi. Läser du Alice i underlandet speciellt på engelska går det att se att boken är fylld av just detta. Nedan är ett exempel:

> “Take some more tea,” the March Hare said to Alice, very earnestly.

> “I’ve had nothing yet,” Alice replied in an offended tone: “so I can’t take more.” 

> “You mean you can’t take less,” said the Hatter: “It’s very easy to take more than nothing.”

Han tyckte även om att skapa olika typer av pussel både rena logikpussel men pussel som leker med orden.
Ett av hans mesta kända pussel heter *Doublets* som du kommer få göra i denna övning.

### Instruktioner

Pusslet går ut på att du får ett startord och ett slutord och du ska genom att byta ut bokstäver i ditt startord få det till ditt slutord med så få byten som möjligt.

**Regler**
* Du får enbart byta ut en bokstav åt gången.
* Varje ord som bildas måste vara ett korrekt engelskt ord, dvs. det måste finnas i variabeln vid namn ordbok.

**Exempel**

I detta exempel så ska vi få **FOUR** att bli **FIVE**. Observera att själva spelet är på engelska.

* FOUR (startord)
* FOUL (Bytte ut R till L)
* FOOL (Bytte ut U till O)
* FOOT (Bytte ut L till T)
* FORT (Bytte ut O till R)
* FORE (Bytte ut T till E)
* FIRE (Bytte ut O till I)
* FIVE (Slutord)


#### Hur

Börja med att testa pusslet med papper och penna gör ett pussel så du förstår hur det fungerar.
Skriva varje nytt ord under det förgående ordet som jag har gjort ovan och håll dig till reglerna.

Testa med detta pussel:

EYE (startord)

LID (Slutord)

Därefter går du över till att skriva pseudokod för pusslet.