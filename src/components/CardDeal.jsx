import React from "react";
import { card, google, twitter  } from "../assets";
import styles, { layout } from "../style";


const CardDeal = () => (
	<section className={layout.section}>
		<div className={layout.sectionInfo}>
			<h2 className={styles.heading2}>
				Ready to bring your 
				  <br/> 
				  Vision to Life?
				
			</h2>
			<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
			Click and fill a form, lets know what you have in mind.
			</p>

			<div className="flex flex-row flex-wrap sm:mt-10 mt-6">
       <a href="https://docs.google.com/forms/d/e/1FAIpQLSfqlLmlf2UHAt5anxah0ZwNh7VpoaiUlLZfwxyXL9DJp1gIXg/viewform?usp=pp_url">
	    <img src={google} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
		</a>
		<a href="https://docs.google.com/forms/d/e/1FAIpQLSf-guD51OEkxKKjjJWcyeLyz94lsjAAFSMlEvfPprhMHw-4Mg/viewform?usp=pp_url">
		<img src={twitter} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
		</a>
	  </div>
		</div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
	</section>
);

export default CardDeal;
