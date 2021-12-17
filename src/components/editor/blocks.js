// @ts-nocheck
import {
  sectionOne,
  sectionTwoEight,
  sectionThreeSeven,
  sectionFiveFive,
  sectionSevenThree,
  sectionEightTwo,
  sectionThreeThreeThree,
  sectionTwoTwoFive,
  sectionTwoFiveTwo,
  sectionFiveTwoTwo,
  sectionTwoTwoTwoTwo,
  sectionOneOneOneOne,
  navbarBlock,
  sliderblock,
  formBLock,
  inputBlock,
  textareaBlock,
  selectBlock,
  buttonBlock,
  preHeader1,
} from "./svgs"

const header1 = require("./images/header1.png")
const header2 = require("./images/header2.png")
const header3 = require("./images/header3.png")
const head1 = require("./images/head1.png")
const head2 = require("./images/head2.png")
const head3 = require("./images/head3.png")
const button1 = require("./images/button1.png")
const button3 = require("./images/button3.png")

export default (editor) => {
  const bm = editor.BlockManager

  bm.add("quote", {
    label: "Quote",
    category: "Basic",
    attributes: { class: "fa fa-quote-right" },
    content: `<blockquote class="quote">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
      </blockquote>`,
  })

  bm.add("text-basic", {
    category: "Basic",
    label: "Text section",
    attributes: { class: "gjs-fonts gjs-f-h1p" },
    content: `<section class="bdg-sect">
      <h1 class="heading">Insert title here</h1>
      <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </section>`,
  })

  bm.add("divider", {
    label: "Divider",
    category: "Basic",
    content: `<table style="width: 100%; margin-top: 10px; margin-bottom: 10px;">
        <tr>
          <td class="divider"></td>
        </tr>
      </table>
      <style>
      .divider {
        background-color: rgba(0, 0, 0, 0.1);
        height: 10px;
        width: 100%;
      }
      </style>`,
    attributes: { class: "gjs-fonts gjs-f-divider" },
  })

  let gridItem = `<table class="grid-item-card">
        <tr>
          <td class="grid-item-card-cell">
            <img class="grid-item-image" src="http://placehold.it/250x150/78c5d6/fff/" alt="Image"/>
            <table class="grid-item-card-body">
              <tr>
                <td class="grid-item-card-content">
                  <h1 class="card-title">Title here</h1>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>`

  bm.add("grid-items", {
    label: "Grid item",
    category: "Basic",
    content: `<table class="grid-item-row">
        <tr>
          <td class="grid-item-cell2-l">${gridItem}</td>
          <td class="grid-item-cell2-r">${gridItem}</td>
        </tr>
      </table>`,
    attributes: { class: "fa fa-th" },
  })

  let listItem = `<table class="list-item">
        <tr>
          <td class="list-item-cell">
            <table class="list-item-content">
              <tr class="list-item-row">
                <td class="list-cell-left">
                  <img class="list-item-image" src="http://placehold.it/150x150/78c5d6/fff/" alt="Image"/>
                </td>
                <td class="list-cell-right">
                  <h1 class="card-title">Title here</h1>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>`

  bm.add("list-items", {
    label: "List item",
    category: "Basic",
    content: listItem + listItem,
    attributes: { class: "fa fa-th-list" },
  })

  bm.add("form", {
    category: "Form",
    media: formBLock,
    label: "Form",
    attributes: { title: "Form" },
    content: `
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    `,
  })

  bm.add("input", {
    category: "Form",
    media: inputBlock,
    label: "Input",
    attributes: { title: "Input" },
    content: `
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Label</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="placeholder">
    </div>
    `,
  })

  bm.add("textarea", {
    category: "Form",
    media: textareaBlock,
    label: "Textarea",
    attributes: { title: "Textarea" },
    content: `
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    `,
  })

  bm.add("select", {
    category: "Form",
    media: selectBlock,
    label: "Select",
    attributes: { title: "Select" },
    content: `
    <select class="form-select" aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    `,
  })

  bm.add("button", {
    category: "Form",
    media: buttonBlock,
    label: "Button",
    attributes: { title: "Button" },
    content: `
      <button type="button" class="btn btn-primary">Primary</button>
    `,
  })

  bm.add("checkbox", {
    category: "Form",
    label: "Checkbox",
    attributes: { title: "Checkbox", class: "fa fa-check-square" },
    content: `
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          Default checkbox
        </label>
      </div>
    `,
  })

  bm.add("radio", {
    category: "Form",
    label: "Radio",
    attributes: { title: "Radio", class: "fa fa-dot-circle-o" },
    content: `
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
          Default radio
        </label>
      </div>
    `,
  })

  bm.add("sectionOne", {
    category: "Rows",
    label: `${sectionOne}`,
    attributes: { class: "layerBlocks" },
    content: `
    <div class="gjs-row">
      <div class="gjs-cell">
      </div>
    </div>
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
      }
      .gjs-row{
        display:table;
        padding:10px;
        width:100%;
      }
      .gjs-cell{
        width:8%;
        display:table-cell;
        height:75px;
      }
      @media (max-width: 768px){
        .gjs-cell{
          width:100%;
          display:block;
        }
      }
    </style>
    `,
  })

  bm.add("sectionTwoEight", {
    category: "Rows",
    label: `${sectionTwoEight}`,
    attributes: { class: "layerBlocks" },
    content: `
    <div class="gjs-row">
      <div class="gjs-cell" id="one">
      </div>
      <div class="gjs-cell" id="two">
      </div>
    </div>
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
      }
      .gjs-row{
        display:table;
        padding:10px;
        width:100%;
      }
      .gjs-cell{
        width:8%;
        display:table-cell;
        height:75px;
      }
      #one{
        width:20%;
      }
      #two{
        width:80%;
      }
      @media (max-width: 768px){
        .gjs-cell{
          width:100%;
          display:block;
        }
        #one{
          width:100%;
        }
        #two{
          width:100%;
        }
      }
    </style>
    `,
  })

  bm.add("sectionThreeSeven", {
    category: "Rows",
    label: `${sectionThreeSeven}`,
    attributes: { class: "layerBlocks" },
    content: `
    <div class="gjs-row">
      <div class="gjs-cell" id="one">
      </div>
      <div class="gjs-cell" id="two">
      </div>
    </div>
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
      }
      .gjs-row{
        display:table;
        padding:10px;
        width:100%;
      }
      .gjs-cell{
        width:8%;
        display:table-cell;
        height:75px;
      }
      #one{
        width:30%;
      }
      #two{
        width:70%;
      }
      @media (max-width: 768px){
        .gjs-cell{
          width:100%;
          display:block;
        }
        #one{
          width:100%;
        }
        #two{
          width:100%;
        }
      }
    </style>
    `,
  })

  bm.add("sectionFiveFive", {
    category: "Rows",
    label: `${sectionFiveFive}`,
    attributes: { class: "layerBlocks" },
    content: `
    <div class="gjs-row">
      <div class="gjs-cell">
      </div>
      <div class="gjs-cell">
      </div>
    </div>
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
      }
      .gjs-row{
        display:table;
        padding:10px;
        width:100%;
      }
      .gjs-cell{
        width:8%;
        display:table-cell;
        height:75px;
      }
      @media (max-width: 768px){
        .gjs-cell{
          width:100%;
          display:block;
        }
      }
    </style>
    `,
  })

  bm.add("sectionSevenThree", {
    category: "Rows",
    label: `${sectionSevenThree}`,
    attributes: { class: "layerBlocks" },
    content: `
    <div class="gjs-row">
      <div class="gjs-cell" id="one">
      </div>
      <div class="gjs-cell" id="two">
      </div>
    </div>
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
      }
      .gjs-row{
        display:table;
        padding:10px;
        width:100%;
      }
      .gjs-cell{
        width:8%;
        display:table-cell;
        height:75px;
      }
      #one{
        width:70%;
      }
      #two{
        width:30%;
      }
      @media (max-width: 768px){
        .gjs-cell{
          width:100%;
          display:block;
        }
        #one{
          width:100%;
        }
        #two{
          width:100%;
        }
      }
    </style>
    `,
  })

  bm.add("sectionEightTwo", {
    category: "Rows",
    label: `${sectionEightTwo}`,
    attributes: { class: "layerBlocks" },
    content: `
    <div class="gjs-row">
      <div class="gjs-cell" id="one">
      </div>
      <div class="gjs-cell" id="two">
      </div>
    </div>
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
      }
      .gjs-row{
        display:table;
        padding:10px;
        width:100%;
      }
      .gjs-cell{
        width:8%;
        display:table-cell;
        height:75px;
      }
      #one{
        width:80%;
      }
      #two{
        width:20%;
      }
      @media (max-width: 768px){
        .gjs-cell{
          width:100%;
          display:block;
        }
        #one{
          width:100%;
        }
        #two{
          width:100%;
        }
      }
    </style>
    `,
  })

  bm.add("sectionThreeThreeThree", {
    category: "Rows",
    label: `${sectionThreeThreeThree}`,
    attributes: { class: "layerBlocks" },
    content: `
    <div class="gjs-row">
      <div class="gjs-cell">
      </div>
      <div class="gjs-cell">
      </div>
      <div class="gjs-cell">
      </div>
    </div>
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
      }
      .gjs-row{
        display:table;
        padding:10px;
        width:100%;
      }
      .gjs-cell{
        width:8%;
        display:table-cell;
        height:75px;
      }
      @media (max-width: 768px){
        .gjs-cell{
          width:100%;
          display:block;
        }
      }
    </style>
    `,
  })

  bm.add("sectionTwoTwoFive", {
    category: "Rows",
    label: `${sectionTwoTwoFive}`,
    attributes: { class: "layerBlocks" },
    content: `
    <div class="gjs-row">
      <div class="gjs-cell" id="one">
      </div>
      <div class="gjs-cell" id="two">
      </div>
      <div class="gjs-cell" id="three">
      </div>
    </div>
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
      }
      .gjs-row{
        display:table;
        padding:10px;
        width:100%;
      }
      .gjs-cell{
        width:8%;
        display:table-cell;
        height:75px;
      }
      #one{
        width:25%;
      }
      #two{
        width:25%;
      }
      #three{
        width:500%;
      }
      @media (max-width: 768px){
        .gjs-cell{
          width:100%;
          display:block;
        }
        #one{
          width:100%;
        }
        #two{
          width:100%;
        }
        #three{
          width:100%;
        }
      }
    </style>
    `,
  })

  bm.add("sectionTwoFiveTwo", {
    category: "Rows",
    label: `${sectionTwoFiveTwo}`,
    attributes: { class: "layerBlocks" },
    content: `
    <div class="gjs-row">
      <div class="gjs-cell" id="one">
      </div>
      <div class="gjs-cell" id="two">
      </div>
      <div class="gjs-cell" id="three">
      </div>
    </div>
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
      }
      .gjs-row{
        display:table;
        padding:10px;
        width:100%;
      }
      .gjs-cell{
        width:8%;
        display:table-cell;
        height:75px;
      }
      #one{
        width:25%;
      }
      #two{
        width:50%;
      }
      #three{
        width:25%;
      }
      @media (max-width: 768px){
        .gjs-cell{
          width:100%;
          display:block;
        }
        #one{
          width:100%;
        }
        #two{
          width:100%;
        }
        #three{
          width:100%;
        }
      }
    </style>
    `,
  })

  bm.add("sectionFiveTwoTwo", {
    category: "Rows",
    label: `${sectionFiveTwoTwo}`,
    attributes: { class: "layerBlocks" },
    content: `
    <div class="gjs-row">
      <div class="gjs-cell" id="one">
      </div>
      <div class="gjs-cell" id="two">
      </div>
      <div class="gjs-cell" id="three">
      </div>
    </div>
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
      }
      .gjs-row{
        display:table;
        padding:10px;
        width:100%;
      }
      .gjs-cell{
        width:8%;
        display:table-cell;
        height:75px;
      }
      #one{
        width:50%;
      }
      #two{
        width:25%;
      }
      #three{
        width:25%;
      }
      @media (max-width: 768px){
        .gjs-cell{
          width:100%;
          display:block;
        }
        #one{
          width:100%;
        }
        #two{
          width:100%;
        }
        #three{
          width:100%;
        }
      }
    </style>
    `,
  })

  bm.add("sectionTwoTwoTwoTwo", {
    category: "Rows",
    label: `${sectionTwoTwoTwoTwo}`,
    attributes: { class: "layerBlocks" },
    content: `
    <div class="gjs-row">
      <div class="gjs-cell" id="one">
      </div>
      <div class="gjs-cell" id="two">
      </div>
      <div class="gjs-cell" id="three">
      </div>
      <div class="gjs-cell" id="four">
      </div>
    </div>
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
      }
      .gjs-row{
        display:table;
        padding:10px;
        width:100%;
      }
      .gjs-cell{
        width:8%;
        display:table-cell;
        height:75px;
      }
      #one{
        width:25%;
      }
      #two{
        width:25%;
      }
      #three{
        width:25%;
      }
      #four{
        width:25%;
      }
      @media (max-width: 768px){
        .gjs-cell{
          width:100%;
          display:block;
        }
        #one{
          width:100%;
        }
        #two{
          width:100%;
        }
        #three{
          width:100%;
        }
        #four{
          width:100%;
        }
      }
    </style>
    `,
  })

  bm.add("sectionOneOneOneOne", {
    category: "Rows",
    label: `${sectionOneOneOneOne}`,
    attributes: { class: "layerBlocks" },
    content: `
    <div class="gjs-row">
      <div class="gjs-cell" id="one">
      </div>
      <div class="gjs-cell" id="two">
      </div>
      <div class="gjs-cell" id="three">
      </div>
      <div class="gjs-cell" id="four">
      </div>
      <div class="gjs-cell" id="five">
      </div>
      <div class="gjs-cell" id="six">
      </div>
    </div>
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
      }
      .gjs-row{
        display:table;
        padding:10px;
        width:100%;
      }
      .gjs-cell{
        width:8%;
        display:table-cell;
        height:75px;
      }
      #one{
        width:16.666666666%;
      }
      #two{
        width:16.666666666%;
      }
      #three{
        width:16.666666666%;
      }
      #four{
        width:16.666666666%;
      }
      #five{
        width:16.666666666%;
      }
      #six{
        width:16.666666666%;
      }
      @media (max-width: 768px){
        .gjs-cell{
          width:100%;
          display:block;
        }
        #one{
          width:100%;
        }
        #two{
          width:100%;
        }
        #three{
          width:100%;
        }
        #four{
          width:100%;
        }
        #five{
          width:100%;
        }
        #six{
          width:100%;
        }
      }
    </style>
    `,
  })

  bm.add("navbar", {
    category: "Extra",
    media: navbarBlock,
    label: "Navbar",
    attributes: { title: "Navbar" },
    content: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `,
  })

  bm.add("slider", {
    category: "Extra",
    media: sliderblock,
    label: "Slider",
    attributes: { title: "Slider" },
    content: `
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="..." class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="..." class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="..." class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    `,
  })

  bm.add("preHeader", {
    category: "Pre Header",
    media: preHeader1,
    attributes: { title: "Web view link", class: "componentsBlocks" },
    content: `
      <style>
        html,
        body {
          margin: 0 auto !important;
          padding: 0 !important;
          height: 100% !important;
          width: 100% !important;
          background: #f1f1f1;
          font-family: 'Montserrat', sans-serif;
        }

        /* What it does: Stops email clients resizing small text. */
        * {
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
        }

        .bg_white {
          background: #ffffff;
        }
      </style>

      <center style="width: 100%; background-color: #f1f1f1;">
        <div style="max-width: 600px; margin: 0 auto;" class="email-container">
          <!-- BEGIN BODY -->
          <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
            style="margin: auto;">
            <tr>
              <td class="bg_white logo" style="padding: 0em 2.5em; text-align: right">
                <p style="font-size: 12px; color: rgba(0,0,0,0.7)">You can’t see this email? <a
                    style="font-weight: 600; text-decoration: none; color: rgba(0,0,0,0.7)" href="#">View in your
                    browser</a></p>
              </td>
            </tr><!-- end tr -->
          </table>
        </div>
      </center>
    `,
  })

  bm.add("headOne", {
    category: "Header",
    label: `<img src="${head1}" style="width: 150px" />`,
    attributes: { class: "componentsBlocks" },
    content: `
              <style>
                #header1 {
                  margin: 0 auto !important;
                  padding: 0 !important;
                  height: 100% !important;
                  width: 100% !important;
                  background: #f1f1f1;
                  font-family: 'Poppins', sans-serif;
                  font-weight: 400;
                  font-size: 15px;
                  line-height: 1.8;
                  color: rgba(0, 0, 0, 0.4);
                  /* What it does: Stops email clients resizing small text. */
                  /* What it does: Centers email on Android 4.4 */
                  /* What it does: Stops Outlook from adding extra spacing to tables. */
                  /* What it does: Fixes webkit padding issue. */
                  /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links
                should be inline. */
                  /* iPhone 6+, 7+, and 8+ */
                }

                #header1 * {
                  -ms-text-size-adjust: 100%;
                  -webkit-text-size-adjust: 100%;
                }

                #header1 div[style*="margin: 16px 0"] {
                  margin: 0 !important;
                }

                #header1 table,
                #header1 td {
                  mso-table-lspace: 0pt !important;
                  mso-table-rspace: 0pt !important;
                }

                #header1 table {
                  border-spacing: 0 !important;
                  border-collapse: collapse !important;
                  table-layout: fixed !important;
                  margin: 0 auto !important;
                }

                #header1 a {
                  text-decoration: none;
                }

                @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
                  #header1 u~div .email-container {
                    min-width: 320px !important;
                  }
                }

                @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
                  #header1 u~div .email-container {
                    min-width: 375px !important;
                  }
                }

                @media only screen and (min-device-width: 414px) {
                  #header1 u~div .email-container {
                    min-width: 414px !important;
                  }
                }

                #header1 .bg_white {
                  background: #ffffff;
                }

                #header1 .logo h1 {
                  margin: 0;
                }

                #header1 .logo h1 a {
                  color: #000000;
                  font-size: 20px;
                  font-weight: 700;
                  text-transform: uppercase;
                  font-family: 'Poppins', sans-serif;
                }

                #header1 .navigation li {
                  list-style: none;
                  display: inline-block;
                  margin-left: 5px;
                  font-size: 13px;
                  font-weight: 500;
                }

                #header1 .navigation li a {
                  color: rgba(0, 0, 0, 0.4);
                }

                /*# sourceMappingURL=style.css.map */
              </style>

              <center id="header1" style="width: 100%; background-color: #f1f1f1;">
                <div style="max-width: 600px; margin: 0 auto;" class="email-container">
                  <!-- BEGIN BODY -->
                  <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                    style="margin: auto;">
                    <tr>
                      <td valign="top" class="bg_white" style="padding: 1em 2.5em;">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td width="40%" class="logo" style="text-align: left;">
                              <h1><a href="#">Corporate</a></h1>
                            </td>
                            <td width="60%" class="logo" style="text-align: right;">
                              <ul class="navigation">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Works</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a></li>
                              </ul>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </div>
              </center>`,
  })

  bm.add("headTwo", {
    category: "Header",
    label: `<img src="${head2}" style="width: 150px" />`,
    attributes: { class: "componentsBlocks" },
    content: `<style>
                #header2 {
                  margin: 0 auto !important;
                  padding: 0 !important;
                  height: 100% !important;
                  width: 100% !important;
                  background: #f1f1f1;
                  font-family: 'Work Sans', sans-serif;
                  font-weight: 400;
                  font-size: 15px;
                  line-height: 1.8;
                  color: rgba(0, 0, 0, 0.4);
                  /* What it does: Stops email clients resizing small text. */
                  /* What it does: Centers email on Android 4.4 */
                  /* What it does: Stops Outlook from adding extra spacing to tables. */
                  /* What it does: Fixes webkit padding issue. */
                  /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links
                should be inline. */
                  /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
                  /* iPhone 6, 6S, 7, 8, and X */
                  /* iPhone 6+, 7+, and 8+ */
                }

                #header2 * {
                  -ms-text-size-adjust: 100%;
                  -webkit-text-size-adjust: 100%;
                }

                #header2 div[style*="margin: 16px 0"] {
                  margin: 0 !important;
                }

                #header2 table,
                #header2 td {
                  mso-table-lspace: 0pt !important;
                  mso-table-rspace: 0pt !important;
                }

                #header2 table {
                  border-spacing: 0 !important;
                  border-collapse: collapse !important;
                  table-layout: fixed !important;
                  margin: 0 auto !important;
                }

                #header2 a {
                  text-decoration: none;
                }

                #header2 .bg_white {
                  background: #ffffff;
                }

                #header2 .logo h1 {
                  margin: 0;
                }

                #header2 .logo h1 a {
                  color: #000000;
                  font-size: 20px;
                  font-weight: 700;
                  text-transform: uppercase;
                  font-family: 'Poppins', sans-serif;
                }

                @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
                  #header2 u~div .email-container {
                    min-width: 320px !important;
                  }
                }

                @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
                  #header2 u~div .email-container {
                    min-width: 375px !important;
                  }
                }

                @media only screen and (min-device-width: 414px) {
                  #header2 u~div .email-container {
                    min-width: 414px !important;
                  }
                }

                /*# sourceMappingURL=style.css.map */
              </style>

              <center id="header2" style="width: 100%; background-color: #f1f1f1;">
                <div style="max-width: 600px; margin: 0 auto;" class="email-container">
                  <!-- BEGIN BODY -->
                  <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                    style="margin: auto;">
                    <tr>
                      <td valign="top" class="bg_white" style="padding: 1em 2.5em;">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td class="logo" style="text-align: center;">
                              <h1><a href="#">Agency</a></h1>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </div>
              </center>`,
  })

  bm.add("headThree", {
    category: "Header",
    label: `<img src="${head3}" style="width: 150px" />`,
    attributes: { class: "componentsBlocks" },
    content: `<style>
                #header3 {
                  margin: 0 auto !important;
                  padding: 0 !important;
                  height: 100% !important;
                  width: 100% !important;
                  background: #f1f1f1;
                  font-family: 'Lato', sans-serif;
                  font-weight: 400;
                  font-size: 15px;
                  line-height: 1.8;
                  color: rgba(0, 0, 0, 0.4);
                  /* What it does: Stops email clients resizing small text. */
                  /* What it does: Centers email on Android 4.4 */
                  /* What it does: Stops Outlook from adding extra spacing to tables. */
                  /* What it does: Fixes webkit padding issue. */
                  /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links
                should be inline. */
                  /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89 */
                  /* Create one of these media queries for each additional viewport size you'd like to fix */
                  /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
                  /* iPhone 6, 6S, 7, 8, and X */
                  /* iPhone 6+, 7+, and 8+ */
                }

                #header3 * {
                  -ms-text-size-adjust: 100%;
                  -webkit-text-size-adjust: 100%;
                }

                #header3 div[style*="margin: 16px 0"] {
                  margin: 0 !important;
                }

                #header3 table,
                #header3 td {
                  mso-table-lspace: 0pt !important;
                  mso-table-rspace: 0pt !important;
                }

                #header3 table {
                  border-spacing: 0 !important;
                  border-collapse: collapse !important;
                  table-layout: fixed !important;
                  margin: 0 auto !important;
                }

                #header3 a {
                  text-decoration: none;
                }

                #header3 .bg_white {
                  background: #ffffff;
                }

                #header3 .logo h1 {
                  margin: 0;
                }

                #header3 .logo h1 a {
                  color: #000000;
                  font-size: 20px;
                  font-weight: 700;
                  text-transform: uppercase;
                  font-family: 'Lato', sans-serif;
                  border: 2px solid #000;
                  padding: .2em 1em;
                }

                @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
                  #header3 u~div .email-container {
                    min-width: 320px !important;
                  }
                }

                @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
                  #header3 u~div .email-container {
                    min-width: 375px !important;
                  }
                }

                @media only screen and (min-device-width: 414px) {
                  #header3 u~div .email-container {
                    min-width: 414px !important;
                  }
                }

                /*# sourceMappingURL=style.css.map */
              </style>

              <center id="header3" style="width: 100%; background-color: #f1f1f1;">
                <div style="max-width: 600px; margin: 0 auto;" class="email-container">
                  <!-- BEGIN BODY -->
                  <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                    style="margin: auto;">
                    <tr>
                      <td valign="top" class="bg_white" style="padding: 2em">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td class="logo" style="text-align: center;">
                              <h1><a href="#">Shoping</a></h1>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                </div>
              </center>`,
  })

  bm.add("headerOne", {
    category: "Hero Header",
    label: `<img src="${header1}" style="width: 150px" />`,
    attributes: { class: "componentsBlocks" },
    content: `<style>
                #heroHeader1 .page-holder {
                  min-height: 100vh;
                }

                #heroHeader1 .bg-cover {
                  background-size: cover !important;
                }
              </style>

              <div id="heroHeader1" style="background: url(https://bootstrapious.com/i/snippets/sn-bg-image/bg.jpg)" class="page-holder bg-cover">
                <div class="container py-5">
                  <header class="text-center text-white py-5">
                    <h1 class="display-4 font-weight-bold mb-4">Bootstrap Background Image</h1>
                    <p class="lead mb-0">Create a responsive full-page background image window using Bootstrap 4.</p>
                    <p class="font-italic">Snippet By <a href="https://bootstrapious.com" class="text-white">
                        <u>Bootstrapious</u></a>
                    </p>
                  </header>

                  <div class="text-white">
                    <p class="lead">It's not a good approch to deal directly with <code
                        class="bg-white px-2 py-1 rounded">body</code>
                      So, create a wrapper container and make it a full-window
                      height.</p>
                    <p class="lead">Set the wrapper initial height to full window height using <code
                        class="bg-white px-2 py-1 rounded">min-height: 100vh</code></p>
                    <p class="lead">Use <code class="bg-white px-2 py-1 rounded">.bg-cover</code> to make the background fit all
                      viewports.</p>
                  </div>

                </div>
              </div>`,
  })

  bm.add("headerTwo", {
    category: "Hero Header",
    label: `<img src="${header2}" style="width: 150px" />`,
    attributes: { class: "componentsBlocks" },
    content: `<style>
                #heroHeader2 .bg-cover {
                  background-size: cover !important;
                }

                #heroHeader2 body {
                  min-height: 100vh;
                }
              </style>

              <div id="heroHeader2">
                <!-- Bootstrap Static Header -->
                <div style="background: url(https://bootstrapious.com/i/snippets/sn-static-header/background.jpg)"
                  class="jumbotron bg-cover text-white">
                  <div class="container py-5 text-center">
                    <h1 class="display-4 font-weight-bold">Bootstrap static header</h1>
                    <p class="font-italic mb-0">Using simple jumbotron-style component, create a nice Bootstrap 4 header with a
                      background image.</p>
                    <p class="font-italic">Snippe by
                      <a href="https://bootstrapious.com" class="text-white">
                        <u>Bootstrapious</u>
                      </a>
                    </p>
                    <a href="#" role="button" class="btn btn-primary px-5">See All Features</a>
                  </div>
                </div>

                <!-- For Demo Purpose -->
                <div class="container py-5">
                  <h2 class="h3 font-weight-bold">Some demo content</h2>
                  <div class="row">
                    <div class="col-lg-10 mb-4">
                      <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                      <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                    </div>
                    <div class="col-lg-8">
                      <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur <strong
                          class="font-weight-bold text-dark">adipisicing elit, sed </strong>do eiusmod tempor incididunt ut labore
                        et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea
                        commodo consequat. Duis aute irure dolor in <strong class="font-weight-bold text-dark">reprehenderit in
                          voluptate </strong>velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </div>
                </div>
              </div>
              `,
  })

  bm.add("headerThree", {
    category: "Hero Header",
    label: `<img src="${header3}" style="width: 150px" />`,
    attributes: { class: "componentsBlocks" },
    content: `<style>
                #heroHeader3 {
                  position: relative;
                  background-color: black;
                  height: 75vh;
                  min-height: 25rem;
                  width: 100%;
                  overflow: hidden;
                }

                #heroHeader3 video {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  min-width: 100%;
                  min-height: 100%;
                  width: auto;
                  height: auto;
                  z-index: 0;
                  -webkit-transform: translateX(-50%) translateY(-50%);
                  transform: translateX(-50%) translateY(-50%);
                }

                #heroHeader3 .container {
                  position: relative;
                  z-index: 2;
                }

                #heroHeader3 .overlay {
                  position: absolute;
                  top: 0;
                  left: 0;
                  height: 100%;
                  width: 100%;
                  background-color: black;
                  opacity: 0.5;
                  z-index: 1;
                }

                /* Media Query for devices withi coarse pointers and no hover functionality */
                /* This will use a fallback image instead of a video for devices that commonly do not support the HTML5 video
                    element */
                @media (pointer: coarse) and (hover: none) {
                  #heroHeader3 {
                    background: url("https://source.unsplash.com/XT5OInaElMw/1600x900") black no-repeat center center scroll;
                  }
                  #heroHeader3 video {
                    display: none;
                  }
                }
                /*# sourceMappingURL=style.css.map */
              </style>
              
              <header id='heroHeader3'>
                <!-- This div is  intentionally blank. It creates the transparent black overlay over the video which you can modify in the CSS -->
                <div class="overlay"></div>

                <!-- The HTML5 video element that will create the background video on the header -->
                <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                  <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4">
                </video>

                <!-- The header content -->
                <div class="container h-100">
                  <div class="d-flex h-100 text-center align-items-center">
                    <div class="w-100 text-white">
                      <h1 class="display-3">Video Header</h1>
                      <p class="lead mb-0">Using HTML5 Video and Bootstrap</p>
                    </div>
                  </div>
                </div>
              </header>

              <!-- Page section example for content below the video header -->
              <section class="my-5">
                <div class="container">
                  <div class="row">
                    <div class="col-md-8 mx-auto">
                      <p>The HTML5 video element uses an mp4 video as a source. Change the source video to add in your own
                        background! The header text is vertically centered using flex utilities that are built into Bootstrap.</p>
                      <p>The overlay color and opacity can be changed by modifying the <code>background-color</code> and
                        <code>opacity</code> properties of the <code>.overlay</code> class in the CSS.</p>
                      <p>Set the mobile fallback image in the CSS by changing the background image of the header element within the
                        media query at the bottom of the CSS snippet.</p>
                      <p class="mb-0">
                        Created by <a href="https://startbootstrap.com">Start Bootstrap</a>
                      </p>
                    </div>
                  </div>
                </div>
              </section>`,
  })

  bm.add("buttonOne", {
    category: "Buttons",
    label: `<img src="${button1}" style="width: 150px" />`,
    attributes: { class: "componentsBlocks" },
    content: `<style>
                @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

                #button1 {
                  height: 100%;
                  width: 100%;
                  font-family: "Poppins", sans-serif;
                  place-items: center;
                  background: linear-gradient(315deg, #ffffff, #d7e1ec);
                  display: -webkit-inline-box;
                  display: -ms-inline-flexbox;
                  display: inline-flex;
                  justify-content: center;
                  align-items: center;
                }

                #button1 * {
                  margin: 0;
                  padding: 0;
                  -webkit-box-sizing: border-box;
                  box-sizing: border-box;
                }

                #button1 *:focus,
                #button1 *:active {
                  outline: none !important;
                  -webkit-tap-highlight-color: transparent;
                }

                #button1 .icon {
                  position: relative;
                  background-color: #ffffff;
                  border-radius: 50%;
                  padding: 15px;
                  margin: 10px;
                  width: 50px;
                  height: 50px;
                  font-size: 18px;
                  display: -webkit-box;
                  display: -ms-flexbox;
                  display: flex;
                  -webkit-box-pack: center;
                  -ms-flex-pack: center;
                  justify-content: center;
                  -webkit-box-align: center;
                  -ms-flex-align: center;
                  align-items: center;
                  -webkit-box-orient: vertical;
                  -webkit-box-direction: normal;
                  -ms-flex-direction: column;
                  flex-direction: column;
                  -webkit-box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
                  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
                  cursor: pointer;
                  -webkit-transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }

                #button1 .tooltip {
                  position: absolute;
                  top: 0;
                  font-size: 14px;
                  background-color: #ffffff;
                  color: #ffffff;
                  padding: 5px 8px;
                  border-radius: 5px;
                  -webkit-box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
                  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
                  opacity: 0;
                  pointer-events: none;
                  -webkit-transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }

                #button1 .tooltip::before {
                  position: absolute;
                  content: "";
                  height: 8px;
                  width: 8px;
                  background-color: #ffffff;
                  bottom: -3px;
                  left: 50%;
                  -webkit-transform: translate(-50%) rotate(45deg);
                  transform: translate(-50%) rotate(45deg);
                  -webkit-transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }

                #button1 .icon:hover .tooltip {
                  top: -45px;
                  opacity: 1;
                  visibility: visible;
                  pointer-events: auto;
                }

                #button1 .icon:hover span,
                #button1 .icon:hover .tooltip {
                  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
                }

                #button1 .facebook:hover,
                #button1 .facebook:hover .tooltip,
                #button1 .facebook:hover .tooltip::before {
                  background-color: #3b5999;
                  color: #ffffff;
                }

                #button1 .twitter:hover,
                #button1 .twitter:hover .tooltip,
                #button1 .twitter:hover .tooltip::before {
                  background-color: #46c1f6;
                  color: #ffffff;
                }

                #button1 .instagram:hover,
                #button1 .instagram:hover .tooltip,
                #button1 .instagram:hover .tooltip::before {
                  background-color: #e1306c;
                  color: #ffffff;
                }

                #button1 .github:hover,
                #button1 .github:hover .tooltip,
                #button1 .github:hover .tooltip::before {
                  background-color: #333333;
                  color: #ffffff;
                }

                #button1 .youtube:hover,
                #button1 .youtube:hover .tooltip,
                #button1 .youtube:hover .tooltip::before {
                  background-color: #de463b;
                  color: #ffffff;
                }
              </style>

              <div id="button1" class="wrapper">
                <div class="icon facebook">
                  <div class="tooltip">Facebook</div>
                  <span><i class="fab fa-facebook-f"></i></span>
                </div>
                <div class="icon twitter">
                  <div class="tooltip">Twitter</div>
                  <span><i class="fab fa-twitter"></i></span>
                </div>
                <div class="icon instagram">
                  <div class="tooltip">Instagram</div>
                  <span><i class="fab fa-instagram"></i></span>
                </div>
                <div class="icon github">
                  <div class="tooltip">Github</div>
                  <span><i class="fab fa-github"></i></span>
                </div>
                <div class="icon youtube">
                  <div class="tooltip">Youtube</div>
                  <span><i class="fab fa-youtube"></i></span>
                </div>
              </div>`,
  })

  bm.add("buttonThree", {
    category: "Buttons",
    label: `<img src="${button3}" style="width: 150px" />`,
    attributes: { class: "componentsBlocks" },
    content: `<style>
                  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

                  body {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-pack: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    height: 100vh;
                    background: #f1f1f1;
                  }

                  .button2 {
                    position: relative;
                    display: inline-block;
                    padding: 30px 61px;
                    border-radius: 4px;
                    color: #777;
                    text-decoration: none;
                    text-transform: uppercase;
                    overflow: hidden;
                    margin: 25px;
                    font-family: "Roboto", sans-serif;
                    -webkit-filter: hue-rotate(0deg);
                    filter: hue-rotate(0deg);
                    border: 2px solid #777;
                    -webkit-transition: all 0.1s linear;
                    transition: all 0.1s linear;
                  }

                  .button2:hover {
                    border: 1px solid transparent;
                  }

                  .button2:hover span {
                    position: absolute;
                    display: block;
                  }

                  .button2:hover span:nth-child(1) {
                    -webkit-filter: hue-rotate(0deg);
                    filter: hue-rotate(0deg);
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background: -webkit-gradient(linear, left top, right top, from(transparent), to(#3a86ff));
                    background: linear-gradient(90deg, transparent, #3a86ff);
                    -webkit-animation: animate1 1s linear infinite;
                    animation: animate1 1s linear infinite;
                  }

                  @-webkit-keyframes animate1 {
                    0% {
                      left: -100%;
                    }

                    50%,
                    100% {
                      left: 100%;
                    }
                  }

                  @keyframes animate1 {
                    0% {
                      left: -100%;
                    }

                    50%,
                    100% {
                      left: 100%;
                    }
                  }

                  .button2:hover span:nth-child(2) {
                    -webkit-filter: hue-rotate(60deg);
                    filter: hue-rotate(60deg);
                    top: -100%;
                    right: 0;
                    width: 3px;
                    height: 100%;
                    background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(#3a86ff));
                    background: linear-gradient(180deg, transparent, #3a86ff);
                    -webkit-animation: animate2 1s linear infinite;
                    animation: animate2 1s linear infinite;
                    -webkit-animation-delay: 0.25s;
                    animation-delay: 0.25s;
                  }

                  @-webkit-keyframes animate2 {
                    0% {
                      top: -100%;
                    }

                    50%,
                    100% {
                      top: 100%;
                    }
                  }

                  @keyframes animate2 {
                    0% {
                      top: -100%;
                    }

                    50%,
                    100% {
                      top: 100%;
                    }
                  }

                  .button2:hover span:nth-child(3) {
                    -webkit-filter: hue-rotate(120deg);
                    filter: hue-rotate(120deg);
                    bottom: 0;
                    right: 0;
                    width: 100%;
                    background: -webkit-gradient(linear, right top, left top, from(transparent), to(#3a86ff));
                    background: linear-gradient(270deg, transparent, #3a86ff);
                    -webkit-animation: animate3 1s linear infinite;
                    animation: animate3 1s linear infinite;
                    -webkit-animation-delay: 0.5s;
                    animation-delay: 0.5s;
                  }

                  @-webkit-keyframes animate3 {
                    0% {
                      right: -100%;
                      height: 3px;
                    }

                    50%,
                    100% {
                      height: 2px;
                      right: 100%;
                    }
                  }

                  @keyframes animate3 {
                    0% {
                      right: -100%;
                      height: 3px;
                    }

                    50%,
                    100% {
                      height: 2px;
                      right: 100%;
                    }
                  }

                  .button2:hover span:nth-child(4) {
                    -webkit-filter: hue-rotate(300deg);
                    filter: hue-rotate(300deg);
                    bottom: -100%;
                    left: 0;
                    width: 3px;
                    height: 100%;
                    background: -webkit-gradient(linear, left bottom, left top, from(transparent), to(#3a86ff));
                    background: linear-gradient(360deg, transparent, #3a86ff);
                    -webkit-animation: animate4 1s linear infinite;
                    animation: animate4 1s linear infinite;
                    -webkit-animation-delay: 0.75s;
                    animation-delay: 0.75s;
                  }

                  @-webkit-keyframes animate4 {
                    0% {
                      bottom: -100%;
                    }

                    50%,
                    100% {
                      bottom: 100%;
                    }
                  }

                  @keyframes animate4 {
                    0% {
                      bottom: -100%;
                    }

                    50%,
                    100% {
                      bottom: 100%;
                    }
                  }
                </style>
                
                <div class="button2">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  HOVER ME
                </div>`,
  })
}
