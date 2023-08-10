const button = document.getElementById('burger-button');

const menu = document.getElementById('burger-menu');

if (button) {
    button.addEventListener('click', function () {
        menu.classList.add('header__burger-menu_show');
    })
}

const header = document.createElement('div')
header.classList.add('burger-menu__header')

const closeButton = document.createElement('button')
closeButton.classList.add('burger-menu__header-button')
closeButton.addEventListener('click', function () {
    menu.classList.remove('header__burger-menu_show')
})
const logo = document.createElement('img')
logo.classList.add('burger-menu__header-logo')
logo.setAttribute('src', 'img/main-logo-black.svg')

const main = document.createElement('div')
main.classList.add('burger-menu__main')

const list = document.createElement('ul')
list.classList.add('burger-menu__list')//итемы

const listContent =
[
    {
        name:'Прямая трансляция'
    },
    {
        name:'Ханты-Мансийск'
    },
    {
        name:'Новости'
    },
    {
        name:'Участники'
    },
    {
        name:'Основная информация',
        additionals:['О Ханты-Мансийске','История кубка мира','Информация для участников']
    },
    {
        name:'Результаты'
    },
    {
        name:'Медиа'
    },
    {
        name:'Контакты'
    },
]

listContent.forEach(item => 
    {
        // Создание элемента <li>
        const listItem = document.createElement('li');
        listItem.classList.add('burger-menu__list-item')
        // Создание элемента <a>
        const link = document.createElement('a');
        link.classList.add('burger-menu__list-link')
        // Добавление текста внутри <a> из свойства name объекта
        link.innerText = item.name;
        
        // Добавление <a> внутрь <li>
        listItem.appendChild(link);
    
    // Проверка наличия свойства additionals
    if (item.additionals) 
    {
        const arrow = document.createElement('span');
        arrow.classList.add('burger-menu__arrow-closed', 'burger-menu__content-arrow') 
        link.appendChild(arrow);
        const divElement = document.createElement('div');
        divElement.classList.add('burger-menu__list-additional')

        item.additionals.forEach((additional, index) => 
        {
            const additionalElement = document.createElement('a');
            additionalElement.innerText = additional;
            additionalElement.classList.add('burger-menu__additional-item')
            divElement.appendChild(additionalElement);
            if (index != item.additionals.length - 1)
            {
                const hr = document.createElement('hr')
                divElement.appendChild(hr)
            }
        });
        listItem.appendChild(divElement)

        divElement.style.display = 'none';
        
        arrow.addEventListener('click', () => 
        {
        if (divElement.style.display === 'none') {
            arrow.classList.toggle('burger-menu__arrow-opened')
            arrow.classList.toggle('burger-menu__arrow-closed')
            divElement.style.display = 'block';
        } else {
            arrow.classList.toggle('burger-menu__arrow-opened')
            arrow.classList.toggle('burger-menu__arrow-closed')
            divElement.style.display = 'none';
        }
        });
    }
    // Добавление основного <li> в контейнер
    list.appendChild(listItem);
  });

const controls = document.createElement('div')
controls.classList.add('burger-menu__controls')

const glasses = document.createElement('button')
glasses.classList.add('burger-menu__controls-glasses')
glasses.setAttribute('src', 'img/glasses.svg')

const lang = document.createElement('div')
lang.classList.add('burger-menu__controls-lang')



const ru = document.createElement('div')
ru.textContent = 'Ru'
ru.classList.add('burger-menu__lang')
ru.classList.add('burger-menu__lang_selected')
lang.appendChild(ru)

const eng = document.createElement('div')
eng.textContent = 'En'
eng.classList.add('burger-menu__lang')
lang.appendChild(eng)

const footer = document.createElement('div')
footer.classList.add('burger-menu__footer')

const phone = document.createElement('div')
phone.classList.add('burger-menu__footer-phone')

const loc = document.createElement('span')
loc.classList.add('burger-menu__footer-phone-loc')
loc.textContent = '+7 (3467) '

const identity = document.createElement('span')
identity.classList.add('burger-menu__footer-phone-identity')
identity.textContent = '555-321'

const address = document.createElement('div')
address.classList.add('burger-menu__footer-address')
address.textContent = 'г. Ханты-Мансийск, ул. Лопарева'



menu.appendChild(header)
header.appendChild(logo)
header.appendChild(closeButton)
menu.appendChild(main)
main.appendChild(list)
main.appendChild(controls)
controls.appendChild(glasses)
controls.appendChild(lang)
main.appendChild(footer)
footer.appendChild(phone)
phone.appendChild(loc)
phone.appendChild(identity)
footer.appendChild(address)