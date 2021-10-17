// @ts-nocheck
import doubleColumn from "../images/doubleColumn.svg"
export default {
  category: "Basic",
  label: `<div class="styleBlock"><img style="width: 80%" src="${doubleColumn}"><span>1/2 Section</span></div>`,
  attributes: { title: "1/2 Section" },
  content: [
    `
          <div class="row">
            <div class="cell">
            </div>
            <div class="cell">
            </div>
          </div>
          <style>
            .row{
              display:flex;
              justify-content:flex-start;
              align-items:stretch;
              flex-wrap:nowrap;
              padding:10px;
            }
            .cell{
              min-height:75px;
              flex-grow:1;
              flex-basis:100%;
            }
            @media (max-width: 768px){
              .row{
                flex-wrap:wrap;
              }
            }
          </style>`,
  ],
}
