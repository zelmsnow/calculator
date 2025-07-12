const calcTextP = document.getElementById("calcTextP");
let calcTextIsEmpty = true;
function populateHTML()
{

}
function appendNumber(num)
{
    if (calcTextIsEmpty)
    {
        calcTextP.innerHTML = ""+num;
        calcTextIsEmpty = false;
    } else
    {
        calcTextP.innerHTML += ""+num;
    }
}

const calcButton_1 = document.getElementById("calcButton_1");
calcButton_1.addEventListener("click", function()
{
    appendNumber("1");
});
alert("JS Added!");