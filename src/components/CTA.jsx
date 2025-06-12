import styles from "..//style";
import Button2 from "./Button2";

const CTA = () => {
	return (
		<section className={`${styles.flexCenter} 
		${styles.marginY} ${styles.padding} 
		
		sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
			<div className="flex-1 flex flex-col">
				<h2 className={styles.heading2}>
					Ready to take your digital presence
					to the next level?</h2>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Reach out to us today and let's discuss how 
					we can help you achieve your goals.
				</p>
			</div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
	  <Button2 />
      </div>
		</section>
	);
};

export default CTA;
