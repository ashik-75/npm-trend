import React from "react";
import Testimonials from "./_components/testimonials";

const TestimonalCarousel = () => {
	return (
		<div className="flex overflow-hidden items-center h-full">
			<div className="flex shrink-0 min-w-full animate-marquee gap-10">
				{Array.from({ length: 10 }).map((item, i) => (
					<div key={i + 1} className="shrink-0">
						<Testimonials />
					</div>
				))}
			</div>
		</div>
	);
};

export default TestimonalCarousel;
