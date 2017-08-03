Két nagy része van a react megjelenítésnek:
  prezetáció rész ahol visszaadjuk az értéket
  a másik meg a input feldolgozós rész

/////////--------------///////////

Stateless function:
  olyan page-nél használjuk amik "hontalanok" nincs benne fontos függvény ezáltal rövidebb lesz a kód

  var Fájlnév = (props) => {    //arrow fünksön
    és ide jön be a honlap tartalma
  };

  pl.:

  var Examples = (props) => {
    return(
      <h3>Examples components!</h3>
    )
  };

  változók esetén így lehet

  var Examples = ({változó1, változó2, változón}) => {
    return(
      <h3>Examples components!</h3>
    )
  };

/////////--------------///////////
