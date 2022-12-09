import Card from "./Card";
function CustomerMenu({menu}) {
  return (
    <div className="row">
      <h3>Today's Menu</h3>
      <div>
        <div>
          <div>
            {menu.map((menu) => {
              return <Card key={menu.id} menu={menu} />
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CustomerMenu;
