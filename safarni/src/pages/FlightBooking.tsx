import { BookingForm } from "@/component/bookingFlight/BookingForm";
import { FlightIllustration } from "@/component/bookingFlight/FlightIllustration";

const FlightBooking: React.FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-12">
      {/* Main Container Card */}
      <div className="w-full max-w-7xl bg-white/50 backdrop-blur-sm shadow-2xl shadow-slate-200/50 rounded-[3rem] p-4 lg:p-6 overflow-hidden border border-white">
        <div className="flex flex-col lg:flex-row gap-8 min-h-[600px]">
          {/* Left Side: Illustration */}
          <section className="flex-1 lg:max-w-[50%]">
            <FlightIllustration />
          </section>

          {/* Right Side: Booking Controls */}
          <section className="flex-1 flex flex-col justify-center items-center lg:items-start lg:pl-4 xl:pl-10">
            <BookingForm />
          </section>
        </div>
      </div>
    </main>
  );
};

export default FlightBooking;
