import Button from "../../components/Button";
import styles from "./Buttons.module.scss";

function Buttons() {
    return (
        <div className={styles.container}>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
            <Button primary rounded>
                Rounded
            </Button>
            <Button primary bordered>
                Rounded
            </Button>
            <Button
                primary
                href="https://github.com/KhoiNguyen-265"
                target="_blank"
            >
                Link
            </Button>
            <Button primary size="small">
                Small
            </Button>
            <Button primary>Medium</Button>
            <Button primary size="large">
                Large
            </Button>
            <Button primary className={styles.custom}>
                Custom
            </Button>
            <Button primary disable>
                Disable
            </Button>
            <Button primary loading>
                Loading
            </Button>
            <Button primary onClick={() => alert("Something....")}>
                On Click
            </Button>
        </div>
    );
}

export default Buttons;
