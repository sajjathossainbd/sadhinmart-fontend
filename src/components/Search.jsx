/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa6";
import { MdClear } from "react-icons/md";

const Search = ({ searchText, setSearchText, products }) => {
    
	const inputRef = useRef(null);

	// Function to handle searches
	const handleSearchCards = (e) => {
		e.preventDefault();
		if (e.target.search.value === "") {
			return toast.error("Cannot Perform Empty Search!");
		}
		setSearchText(e.target.search.value);
	};

	// Show Toast with Search Count
	useEffect(() => {
		if (searchText && products?.length > 0) {
			toast.success(
				`${products?.length} ${
					products?.length > 1 ? "Matches" : "Match"
				} Found!`
			);
		}
	}, [products, searchText]);

	// Clear Search Text after a search
	const clearSearchText = () => {
		setSearchText("");
		inputRef.current.value = "";
	};
	return (
		<section
			id="search-section"
			className="mx-auto w-full]"
		>
			{/* Search Cards */}
			<form
				onSubmit={handleSearchCards}
				className="w-full px-4 md:w-3/4 lg:w-1/2 mx-auto flex items-center justify-center flex-col gap-6 h-[36dvh]"
			>
				<label
					className="font-medium text-2xl md:text-3xl lg:text-5xl"
					htmlFor="search"
				>
					Product Search
				</label>
				<div className="flex gap-2 w-full items-center relative px-1 py-1.5 bg-white rounded-xl border  shadow-md ">
					{/* Search Field */}
					<input
						ref={inputRef}
						defaultValue={searchText}
						onChange={(e) => setSearchText(e.target.value)}
						className="pl-2 pr-14 py-2 bg-white w-full focus:outline-0 rounded-2 mx-1"
						placeholder="Search"
						type="text"
						name="search"
						id="search"
					/>
					<div className="absolute right-0 flex gap-2">
						{/* clear search text */}
						{searchText !== "" && (
							<button
								title="Clear Search Field"
								onClick={clearSearchText}
								className="text-2xl hover:text-gray-400 transition-all duration-500"
							>
								<MdClear />
							</button>
						)}
						{/* button to search manually */}
						<button
							className="pr-4 text-nazmulButton hover:text-gray-400 transition-all duration-700"
							type="submit"
						>
							<FaArrowRight />
						</button>
					</div>
				</div>
			</form>
		</section>
	);
};



export default Search;