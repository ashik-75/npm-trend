import React from "react";

const TimeLine = () => {
	return (
		<div className="p-5 max-w-5xl font-inter mx-auto space-y-5">
			<h1 className="dark:text-zinc-300 underline underline-offset-2">
				My Work History
			</h1>

			<div className="flex gap-x-10 ">
				<div className="whitespace-nowrap max-w-20 text-sm dark:text-zinc-400">
					5 March 2022
				</div>
				<div className="relative  after:absolute after:top-7 after:bottom-0 after:w-px after:bg-slate-600 after:start-3.5">
					<div className="h-7 w-7 flex items-center justify-center">
						<div className="w-2 h-2 rounded-full bg-zinc-600 dark:bg-zinc-50"></div>
					</div>
				</div>

				<div>
					<h1 className="text-xl md:text-2xl font-bold dark:text-zinc-300">
						Frontend Software Engineer
					</h1>
					<p className="text-sm dark:text-zinc-400 mb-5">
						Devnest LLC, Savar Dhaka
					</p>
					<p className="dark:text-zinc-300 max-w-md">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius modi
						magnam natus inventore? Qui inventore recusandae atque? Repudiandae,
						qui quo?
					</p>
				</div>
			</div>

			<div className="flex gap-x-10 ">
				<div className="whitespace-nowrap text-sm max-w-20 dark:text-zinc-400">
					10 March 2023
				</div>
				<div className="relative  after:absolute after:top-7 after:bottom-0 after:w-px after:bg-slate-600 after:start-3.5">
					<div className="h-7 w-7 flex items-center justify-center">
						<div className="w-2 h-2 rounded-full bg-zinc-600 dark:bg-zinc-50"></div>
					</div>
				</div>

				<div>
					<h1 className="text-xl md:text-2xl font-bold dark:text-zinc-300">
						Frontend Software Engineer
					</h1>
					<p className="text-sm dark:text-zinc-400 mb-5">
						Gigatech solution, Savar Dhaka
					</p>
					<p className="dark:text-zinc-300 max-w-md">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius modi
						magnam natus inventore? Qui inventore recusandae atque? Repudiandae,
						qui quo?
					</p>
				</div>
			</div>
		</div>
	);
};

export default TimeLine;
