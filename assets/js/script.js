'use strict'

//toggle function
const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
}

//sidebar 
const sidebar = document.querySelector("[data-sidebar]")
const sidebarBtn = document.querySelector("[data-sidebar-btn");

//sidebar toggle func for mobile devices
sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
});

//select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]")
const filterBtn = document.querySelectorAll("[data-filter-btn]")

select.addEventListener("click", function () {
    elementToggleFunc(this);
});

//event for all selector
for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);

    });
}

//filter
const filterItems = document.querySelectorAll("[data-filter-item]");
const filterFunc = function (selectedValue) {
    for (let i = 0; i < filterItems.length; i++) {

        if (selectedValue === "all") {
            filterItems[i].classList.add("active");
        } else if (selectedValue === filterItems[i].dataset.category) {
            filterItems[i].classList.add("active")
        } else {
            filterItems[i].classList.remove("active")
        }

    }
}

//filter for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

    filterBtn[i].addEventListener("click", function () {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;

    });

}

//contact form
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]")


for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {

        //check form
        if (form.checkValidity()) {
            formBtn.removeAttribute("disabled")
        } else {
            formBtn.setAttribute("disabled", "")
        }

    })
}

//page nav
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

//change page
for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {

        for (let i = 0; i < pages.length; i++) {
            if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
                pages[i].classList.add("active")
                navigationLinks[i].classList.add("active");
                window.scrollTo(0, 0);
            } else {
                pages[i].classList.remove("active");
                navigationLinks[i].classList.remove("active")
            }
        }

    })
}

