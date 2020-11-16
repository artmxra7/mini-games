import { Grid, Typography } from "@material-ui/core";
import "./jackpot.css";
const JackPotComponent = () => {
  return (
    <Grid container>
      <Grid className="machine">
        <form name="form1" method="post" action="">
          <Grid className="wrap">
            <input className="reset" type="reset" value="." />
            <input type="checkbox" name="checkbox" id="check1" />
            <label for="check1"></label>
            <input type="checkbox" name="checkbox" id="check2" />
            <label for="check2"></label>
            <input type="checkbox" name="checkbox" id="check3" />
            <label for="check3"></label>
            <input type="checkbox" name="checkbox" id="check4" />
            <label for="check4"></label>
            <input type="checkbox" name="checkbox" id="check5" />
            <label for="check5"></label>
            <input type="checkbox" name="checkbox" id="check6" />
            <label for="check6"></label>
            <input type="checkbox" name="checkbox" id="check7" />
            <label for="check7"></label>
            <input type="checkbox" name="checkbox" id="check8" />
            <label for="check8"></label>
            <input type="checkbox" name="checkbox" id="check9" />
            <label for="check9"></label>
            <input type="checkbox" name="checkbox" id="check10" />
            <label for="check10"></label>
            <Grid className="container1">
              <Grid className="stage">
                <ol className="wheel units">
                  <li className="one">&clubs;</li>
                  <li className="two red">&diams;</li>
                  <li className="three red">&hearts;</li>
                  <li className="four">&spades;</li>
                  <li className="five red">&diams;</li>
                  <li className="six">&clubs;</li>
                  <li className="seven red">&hearts;</li>
                  <li className="eight mystery">?</li>
                  <li className="nine">&spades;</li>
                  <li className="ten red">&diams;</li>
                </ol>
                <ol className="wheel tens">
                  <li className="one red">&diams;</li>
                  <li className="two red">&diams;</li>
                  <li className="three red">&hearts;</li>
                  <li className="four red">&spades;</li>
                  <li className="five">&clubs;</li>
                  <li className="six">&spades;</li>
                  <li className="seven red">&hearts;</li>
                  <li className="eight red">&diams;</li>
                  <li className="nine">&clubs;</li>
                  <li className="ten mystery">?</li>
                </ol>
                <ol className="wheel hundreds">
                  <li className="one">&spades;</li>
                  <li className="two">&clubs;</li>
                  <li className="three">&spades;</li>
                  <li className="four">&clubs;</li>
                  <li className="five red">&hearts;</li>
                  <li className="six red">&diams;</li>
                  <li className="seven mystery">?</li>
                  <li className="eight">&spades;</li>
                  <li className="nine red">&diams;</li>
                  <li className="ten red">&hearts;</li>
                </ol>
              </Grid>
            </Grid>
            <Grid className="jackpot">
              <strong>Jackpot</strong>
              <b className="circle"></b>
              <span className="card card1 red">
                <b>&diams;</b>
                <span className="suit">A &diams;</span>
              </span>
              <span className="card card2">
                <b>&clubs;</b>
                <span className="suit">A &clubs;</span>
              </span>
              <span className="card card3 red">
                <b>&hearts;</b>
                <span className="suit">A &hearts;</span>
              </span>
            </Grid>
            <Grid className="cogs">
              <b></b>
              <b></b>
            </Grid>
            <Grid className="main">
              <Grid className="main-inner"></Grid>
            </Grid>
            <Grid className="lever">
              <Grid className="pull">
                <Grid className="ball"></Grid>
                <Grid className="stem"></Grid>
              </Grid>
              <Grid className="cog1"></Grid>
              <Grid className="cog2"></Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default JackPotComponent;
