function Category() {
  return (
    <div className="flex py-4 justify-between px-10">
      <div className="left">
        <ul className="flex gap-9 font-medium">
          <li className="cursor-pointer hover:underline hover:transition">All Men&apos;s Clothing</li>
          <li className="cursor-pointer hover:underline hover:transition">Women</li>
          <li className="cursor-pointer hover:underline hover:transition">Kids</li>
          <li className="cursor-pointer hover:underline hover:transition">Sports</li>
          <li className="text-c_red cursor-pointer hover:underline hover:transition">Sale</li>
        </ul>
      </div>
      <div className="right border-2 border-black flex gap-2 py-1.5 px-2 cursor-pointer">
        <p>Filter & Sort</p>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default Category;
