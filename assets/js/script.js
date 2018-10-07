$(document).ready(()=>{

        const mainHeading = $('#mainHeading');
        const newGameBtn = $('#newGameBtn');
        const btnSection = $('#buttonSection');

        const usrChoiceImg = $('#usrChoiceImg');
        const compChoiceImg = $('#compChoiceImg');

        const usrScoreTxt = $('#usrScore');
        const compScoreTxt = $('#compScore');

        const usrPanel = $('#usr-panel');
        const compPanel = $('#comp-panel');
        const usrPanelH2 = $('#usr-panel h2');
        const compPanelH2 = $('#comp-panel h2');

        const rBtn = $('#usrRbtn');
        const pBtn = $('#usrPbtn');
        const sBtn = $('#usrSbtn');

        const playerScore = $('.player-score');
        const playerH2 = $('.player-h2');
        const playerPanel = $('.player-panel');

        const usrRImg = "assets/img/rock.png";
        const usrPImg = "assets/img/paper.png";
        const usrSImg = "assets/img/scissor.png";
        const usrGImg = "assets/img/usrGif.gif";
        const compRImg = "assets/img/crock.png";
        const compPImg = "assets/img/cpaper.png";
        const compSImg = "assets/img/cscissor.png";
        const compGImg = "assets/img/compGif.gif";
        
        const usrPicArrays = [usrRImg,usrPImg,usrSImg];
        const compPicArrays = [compRImg, compPImg, compSImg];

        const choices = ['r','p','s'];

        let headingText = "";

        let usrScore = 0;
        let compScore = 0;

        newGameBtn.click(()=>{
          newGameBtn.hide();
          mainHeading.css('padding-top',"50px");
          mainHeading.text('Let the Game Begin!');
          btnSection.show();
          gameInit();
        });


        rBtn.click(()=>{
          mainHeading.css('color',"black");
          usrChoiceImg.attr('src', usrGImg);
          compChoiceImg.attr('src', compGImg);
          setTimeout(()=>{game('r');},500); 
        });

        pBtn.click(()=>{
          mainHeading.css('color',"black");
          usrChoiceImg.attr('src', usrGImg);
          compChoiceImg.attr('src', compGImg);
          setTimeout(()=>{game('p');},500);
        });

        sBtn.click(()=>{
          mainHeading.css('color',"black");
          usrChoiceImg.attr('src', usrGImg);
          compChoiceImg.attr('src', compGImg);
          setTimeout(()=>{game('s');},500);
        });

        const gameInit = () => {
          usrScore = 0;
          compScore = 0;
          playerScore.text('0');
          playerH2.css("color","black");
          usrChoiceImg.attr('src', usrGImg);
          compChoiceImg.attr('src', compGImg);
          playerPanel.removeClass('borderWinner');
        }

        const game = (usrChoice) => {
          const usrChoiceNum = choices.indexOf(usrChoice);
          usrChoiceImg.attr('src', usrPicArrays[usrChoiceNum]);
          const compChoice = getCompChoice();

          switch (usrChoice + compChoice) {
            case "rs":
            case "pr":
            case "sp":
              headingText = `${convertToWord(usrChoice)} beats ${convertToWord(compChoice)}. 1 point to you!`;
              usrScore++;
              usrScoreTxt.text(usrScore);
              break;
            case "rp":
            case "ps":
            case "sr":
              headingText = `${convertToWord(usrChoice)} loses to ${convertToWord(compChoice)}. 1 point to computer!`;
              compScore++;
              compScoreTxt.text(compScore);
              break;
            case "rr":
            case "pp":
            case "ss":
              headingText = `${convertToWord(usrChoice)} equals ${convertToWord(compChoice)}. Its a Draw.`;
              break;
          } /* end of switch */

          mainHeading.css('color',"orange");
          mainHeading.text(headingText);

          if ((usrScore >= 3) || (compScore >= 3)) {
            if (usrScore >= 3) {  
              usrPanelH2.css("color","orange");
              usrPanelH2.text('WINNER');
              usrPanel.addClass("borderWinner");
              mainHeading.append(" Congrats!! You Win!!");
            } else {
              compPanelH2.css("color","orange");
              compPanelH2.text('WINNER');
              compPanel.addClass("borderWinner");
              mainHeading.append(" Sorry.. You Lose..");
            }
            gameFin();
          }  
        } /* end of game function */

        const getCompChoice = () => {                    
          let randomNum = Math.floor((Math.random() * 3));
          compChoiceImg.attr('src', compPicArrays[randomNum]);
          return choices[randomNum];
        }

        const convertToWord = (letter) => {
          if (letter === 'r') return 'Rock';
          if (letter === 'p') return 'Paper';
          return 'Scissor';
        }

        const gameFin = () => {
          headingText = "PLAY AGAIN";
          newGameBtn.text(headingText);
          newGameBtn.show();
          btnSection.hide();
        }

        gameInit();

});