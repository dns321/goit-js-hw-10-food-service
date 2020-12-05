// Відпарцювання теми
const refs = {
    $switch: document.querySelector('#theme-switch-toggle'),
    $body: document.querySelector('body'),
};

const { $switch, $body } = refs;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;

$body.classList.add(LIGHT);

$switch.addEventListener('change', changeTheme);

savedTheme();

function changeTheme() {
    if ($body.classList == LIGHT) {
        $body.classList.replace(LIGHT, DARK);
        localStorage.setItem('them', DARK);
        // this.checked = true;
    } else {
        $body.classList.replace(DARK, LIGHT);
        localStorage.setItem('them', LIGHT);
    };
};

function savedTheme () { 
    const savedTheme = localStorage.getItem('them');
if (savedTheme) {
    $body.classList.add(savedTheme);        
    };
if (savedTheme === DARK) {
    $switch.checked = true;
};
};

