const form = document.getElementById("form");
const btnClosed = document.getElementById("close")

btnClosed.addEventListener('click', () => {

    document.getElementById("alert").style.display = 'none'
    document.getElementById("weight").disabled = false
    document.getElementById("height").disabled = false
    document.getElementById("btn-calc").disabled = false
    document.querySelector(".link-more").style.pointerEvents = 'auto'

})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    var heightValue = parseFloat(height.replace(',', '.'));
    var weightValue = parseFloat(weight.replace(',', '.'));

    const imc = (weightValue / (heightValue * heightValue)).toFixed(2);
    const divResult = document.getElementById("result")
    const span = document.getElementById("level")
    const pImc = document.getElementById("imc")


    if (weight == '' || height == '') {

        document.getElementById("alert").style.display = "flex"
        divResult.style.display = 'none'

        document.getElementById("weight").disabled = true
        document.getElementById("height").disabled = true
        document.getElementById("btn-calc").disabled = true
        document.querySelector(".link-more").style.pointerEvents = 'none'

        return false;
    } else {

        if (imc < 17) {
            divResult.style.display = 'flex';
            span.innerHTML = 'Muito abaixo do peso';
            divResult.style.background = '#f81d1d';
            divResult.style.borderColor = '#f81d1d';
            span.style.color = '#FFF'
            pImc.innerHTML = `IMC = ${imc}`
            document.getElementById('weight').value = '';
            document.getElementById('height').value = '';
            return false;

        } else if (imc > 17 && imc < 18.49) {
            divResult.style.display = 'flex'
            span.innerHTML = 'Abaixo do peso'
            divResult.style.background = 'transparent';
            divResult.style.borderColor = '#67db5a';
            span.style.color = '#67db5a';
            pImc.innerHTML = `IMC = ${imc}`;
            document.getElementById('weight').value = '';
            document.getElementById('height').value = '';
            return false;

        } else if (imc > 18.5 && imc < 24.99) {

            divResult.style.display = 'flex';
            span.innerHTML = 'Peso Normal';
            divResult.style.borderColor = '#5ef340';
            span.style.color = '#5ef340';
            pImc.innerHTML = `IMC = ${imc}`;
            divResult.style.background = 'transparent';
            document.getElementById('weight').value = '';
            document.getElementById('height').value = '';
            return false;

        } else if (imc > 25 && imc < 29.99) {

            divResult.style.display = 'flex';
            span.innerHTML = 'Acima do peso';
            divResult.style.background = '#dc5050';
            divResult.style.borderColor = '#dc5050';
            span.style.color = '#FFF';
            pImc.innerHTML = `IMC = ${imc}`;
            document.getElementById('weight').value = '';
            document.getElementById('height').value = '';
            return false;
        }
        else if (imc > 30 && imc < 34.99) {

            divResult.style.display = 'flex';
            span.innerHTML = 'Obesidade Grau I';
            divResult.style.borderColor = 'rgba(246, 48, 48, 0.745)';
            divResult.style.background = 'rgba(246, 48, 48, 0.745)';
            span.style.color = '#FFF';
            pImc.innerHTML = `IMC = ${imc}`;
            document.getElementById('weight').value = '';
            document.getElementById('height').value = '';
            return false;
        }
        else if (imc > 35 && imc < 39.99) {

            divResult.style.display = 'flex';
            span.innerHTML = 'Obesidade Grau II';
            divResult.style.borderColor = 'rgba(255, 22, 22, 0.745)';
            divResult.style.background = 'rgba(255, 22, 22, 0.745)';
            span.style.color = '#FFF';
            pImc.innerHTML = `IMC = ${imc}`;
            document.getElementById('weight').value = '';
            document.getElementById('height').value = '';
            return false;
        }
        else if (imc > 40) {

            divResult.style.display = 'flex';
            span.innerHTML = 'Obesidade Grau III';
            divResult.style.borderColor = '#ff2727';
            divResult.style.background = '#ff2727';
            span.style.color = '#FFF';
            pImc.innerHTML = `IMC = ${imc}`;
            document.getElementById('weight').value = '';
            document.getElementById('height').value = '';
            return false;
        }

        else {
            return false;
        }

    }
})