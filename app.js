const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doThat(e.target)))

function doThat(ClickedOne) {
    if(good.checked && cheap.checked && fast.checked) {
        if(good === ClickedOne) {
            fast.checked = false
        }

        if(cheap === ClickedOne) {
            good.checked = false
        }

        if(fast === ClickedOne) {
            cheap.checked = false
        }
    }
}