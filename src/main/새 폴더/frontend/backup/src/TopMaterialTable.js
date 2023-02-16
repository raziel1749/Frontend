import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function AutoLayoutSizingExample() {
    return (
        <Form >
            <div className="d-flex justify-content-start">
                <Form.Label htmlFor="title">품목단위정보 등록</Form.Label>
            </div>
            <div class="main_two" align="right">
                <div>
                    <Button variant="primary" type="refresh">
                        새로고침
                    </Button>
                    <Button variant="primary" type="search">
                        조회
                    </Button>
                    <Button variant="primary" type="commit">
                        저장
                    </Button>
                    <Button variant="primary" type="help">
                        HELP
                    </Button>
                </div>
            </div>


            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>회사</Form.Label>
                    <Form.Select defaultValue="팔피엠">
                        <option>전체.</option>
                        <option>...</option>
                    </Form.Select>
                    <Form.Label>품목분류</Form.Label>
                    <Form.Select defaultValue="전체">
                        <option>전체</option>
                        <option>...</option>
                    </Form.Select>
                    <Form.Label>품목군</Form.Label>
                    <Form.Select defaultValue="전체">
                        <option>전체</option>
                        <option>...</option>
                    </Form.Select>
                    <Form.Label>거래처</Form.Label>
                    <Form.Control type="CODE" placeholder="CODE" />
                    <Button variant="primary" type="help">
                        btn
                    </Button>
                    <Form.Control type="NAME" placeholder="NAME" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>품목코드</Form.Label>
                    <Form.Control type="STATE" placeholder="" />
                    <Form.Label>품명</Form.Label>
                    <Form.Control type="STATE" placeholder="" />
                    <Form.Label>사용유무</Form.Label>
                    <Form.Select defaultValue="사용">
                        <option>사용</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>
            </Row>

        </Form>
    );
}

export default AutoLayoutSizingExample;