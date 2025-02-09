import Layout from "./layout";
import styles from "@/styles/Home.module.css";

export default function About() {
    return (
        <Layout>
            <div>
                <h1 className={styles.title}>
                    Welcome to about us
                </h1>
            </div>
        </Layout>
    );
}
