const NavNumbers = ({ navNumber }: { navNumber: string }) => {
  return (
    <div
      className={`number w-9 h-9 lg:w-10 lg:h-10 rounded-lg text-xs leading-[20px] lg:text-sm font-medium flex justify-center items-center ${
        navNumber === "1" ? "text-black" : "text-[#00000080]"
      } `}
    >
      {navNumber}
    </div>
  );
};

export default NavNumbers;
