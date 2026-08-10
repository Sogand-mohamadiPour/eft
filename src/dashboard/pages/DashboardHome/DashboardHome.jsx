export default function DashboardHome() {
  return (
    <div className="text-center">
      <h1
        className="
          m-0
          mb-10.5
          text-2xl
          font-medium
          text-white
        "
      >
        user عزیز خوش آمدید
      </h1>

      <p
        className="
          m-0
          mb-15.5
          text-lg
          text-[#eee7f7]
        "
      >
        دوره های در حال انجام خود را به پایان برسانید!
      </p>

      <div
        className="
          grid
          grid-cols-4
          gap-2
          max-w-145
          mx-auto
        "
      >
        <div
          className="
            h-27
            rounded-[11px]
            border
            border-[#9a32d4]
            bg-[#2d2050]
          "
        />

        <div
          className="
            h-27
            rounded-[11px]
            border
            border-[#9a32d4]
            bg-[#2d2050]
          "
        />

        <div
          className="
            h-27
            rounded-[11px]
            border
            border-[#9a32d4]
            bg-[#2d2050]
          "
        />

        <div
          className="
            h-27
            rounded-[11px]
            border
            border-[#9a32d4]
            bg-[#2d2050]
          "
        />
      </div>
    </div>
  );
}