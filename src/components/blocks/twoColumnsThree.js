// @ts-nocheck
import doubleFractionColumn from "../images/doubleFractionColumn.svg"
export default {
  category: "Basic",
  label: `<div class="styleBlock"><img style="width: 80%" src="${doubleFractionColumn}"><span>3/7 Section</span></div>`,
  attributes: { title: "3/7 Section" },
  content: [
    `
          <div class="row">
            <div class="cell" id="imo4">
            </div>
            <div class="cell" id="isxu">
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
            #imo4{
              flex-basis:30%;
            }
            #isxu{
              flex-basis:70%;
            }
            @media (max-width: 768px){
              .row{
                flex-wrap:wrap;
              }
            }
          </style>`,
  ],
}
