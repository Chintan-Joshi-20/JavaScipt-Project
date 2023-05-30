userInput = document.getElementById("textarea");

Paragraph = document.getElementById("para");

ounceToMilliliter = document.getElementById("bton1");

MilliliterToOunce = document.getElementById("bton2");

LiterToMilliliter = document.getElementById("bton3");

MilliliterToLiter = document.getElementById("bton4");

InchesToCentimeter = document.getElementById("bton5");

CentimeterToInches = document.getElementById("bton6");

PoundsToKilogram = document.getElementById("bton7");

KilogramToPounds = document.getElementById("bton8");

clear = document.getElementById("clr");


bton1.onclick = function()
{
   textarea = userInput.value;

   Paragraph.innerHTML="Result for Ounches to Milliliter is: " + (textarea * 29.5735).toFixed(2) + "ml";
   
   Paragraph.style = "color: cyan; font-style:italic;"

};

bton2.onclick = function()
{
   textarea = userInput.value;

   Paragraph.innerHTML="Result for Milliliter to Ounce is: " + (textarea * 0.033814).toFixed(2) + "OZ";
   
   Paragraph.style = "color: lightcyan; font-style:italic;"

};

bton3.onclick = function()
{
   textarea = userInput.value;

   Paragraph.innerHTML="Result for Liter to Milliliter is: " + (textarea * 1000).toFixed(2) + "ml";
   
   Paragraph.style = "color: tomato; font-style:italic;"

};

bton4.onclick = function()
{
   textarea = userInput.value;

   Paragraph.innerHTML="Result for Milliliter to Liter is: " + (textarea * 0.001).toFixed(2) + "L";
   
   Paragraph.style = "color: lightgreen; font-style: italic;"

};

bton5.onclick = function()
{
   textarea = userInput.value;

   Paragraph.innerHTML="Result for Inches to Centimeter is: " + (textarea * 2.54).toFixed(2) + "cm";
   
   Paragraph.style = "color: pink; font-style: italic;"

};

bton6.onclick = function()
{
   textarea = userInput.value;

   Paragraph.innerHTML="Result for Centimeter to Inches is: " + (textarea * 0.393701).toFixed(2) + "inches";
   
   Paragraph.style = "color: lightblue; font-style: italic;"

};

bton7.onclick = function()
{
   textarea = userInput.value;

   Paragraph.innerHTML="Result for Pounds to Kilogram is: " + (textarea * 0.453592).toFixed(2) + "kg";
   
   Paragraph.style = "color: indianred; font-style: italic;"

};

bton8.onclick = function()
{
   textarea = userInput.value;

   Paragraph.innerHTML="Result for Kilogram to Pounds is: " + (textarea * 2.20462).toFixed(2) + "lb";
   
   Paragraph.style = "color: lightsalmon; font-style: italic;"

};

clear.onclick = function()
{
    userInput.focus();

    Paragraph.innerHTML = "This is where the result will be displayed according to the unit which you will choose :)";
    Paragraph.style="color: white;";
};