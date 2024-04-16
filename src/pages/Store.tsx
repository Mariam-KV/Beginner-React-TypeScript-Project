import { Col, Row } from "react-bootstrap"
import StoreItem from "../components/StoreItem"
import storeItems from "../data/items.json"
//medium screen size 2 columns
//extra small xs 1 column
//large screen size 3 columns
 function Store() {
  return (
    <>
      <h1>Store</h1>
      
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
        
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
export default Store