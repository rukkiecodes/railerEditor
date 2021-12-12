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
} from "./svgs"

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
    category: "Components",
    media: sliderblock,
    label: "Web view link",
    attributes: { title: "Web view link" },
    content: `
    <!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office">

    <head>
      <meta charset="utf-8"> <!-- utf-8 works for most cases -->
      <meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
      <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
      <meta name="x-apple-disable-message-reformatting"> <!-- Disable auto-scale in iOS 10 Mail entirely -->
      <title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->


      <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i" rel="stylesheet">

      <!-- CSS Reset : BEGIN -->
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


    </head>

    <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #222222;">
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
    </body>

    </html>
    `,
  })
}
