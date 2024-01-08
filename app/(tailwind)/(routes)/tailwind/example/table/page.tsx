import React from "react";

const persons = [
	{ id: 1, name: "Alex Jones", age: 54, address: "New york no. 1 Lake Part" },
	{
		id: 2,
		name: "Mark Brown",
		age: 74,
		address: "West island virginia",
	},
	{
		id: 3,
		name: "Jemie Seens",
		age: 27,
		address: "Massacuates, NYT, USA",
	},
	{
		id: 4,
		name: "Mark Millie",
		age: 56,
		address: "Gary wilson",
	},
	{
		id: 5,
		name: "Mathew Gead",
		age: 19,
		address: "Verginia, west side kentaky",
	},
];

const Table = () => {
	return (
		<div className=" flex items-center justify-center h-full">
			<div className="overflow-x-auto">
				<div className="text-left font-inter">
					<table className="divide-y">
						<thead>
							<tr>
								<th className="text-gray-500 dark:text-gray-100 px-6 py-3 font-medium uppercase text-xs">
									Name
								</th>
								<th className="text-gray-500 dark:text-gray-100 px-6 py-3 font-medium uppercase text-xs">
									Age
								</th>
								<th className="text-gray-500 dark:text-gray-100 px-6 py-3 font-medium uppercase text-xs">
									Address
								</th>
								<th className="text-gray-500 dark:text-gray-100 px-6 py-3 font-medium uppercase text-xs">
									Action
								</th>
							</tr>
						</thead>
						<tbody className="divide-y">
							{persons.map((person) => (
								<tr key={person.id}>
									<td className="text-sm whitespace-nowrap text-gray-600 dark:text-gray-100 px-6 py-3">
										{person.name}
									</td>
									<td className="text-sm whitespace-nowrap text-gray-600 dark:text-gray-100 px-6 py-3">
										{person.age}
									</td>
									<td className="text-sm whitespace-nowrap text-gray-600 dark:text-gray-100 px-6 py-3">
										{person.address}
									</td>
									<td className="text-sm whitespace-nowrap text-blue-700 dark:text-blue-500 font-medium px-6 py-3">
										<button className="font-semibold hover:underline underline-offset-2">
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Table;
