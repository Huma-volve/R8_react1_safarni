import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Star, MapPin, Bed, Bath, Square, Camera } from "lucide-react";
import { getHotelById, getRoomsByHotelId } from "@/constants/demoData";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { getHotelReviews, addReview, getAverageRating } from "@/utils/reviews";
import { addBooking, calculateNights } from "@/utils/bookings";
import { Card } from "@/components/ui/card";
import type { Review, Room } from "@/types/hotel";

export default function HotelDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const hotel = id ? getHotelById(id) : null;
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<"About" | "Gallery" | "Review">("About");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [note, setNote] = useState("");
  const [isBooking, setIsBooking] = useState(false);
  const [isBookingSubmitting, setIsBookingSubmitting] = useState(false);
  const [showGuestsModal, setShowGuestsModal] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [hotelRooms, setHotelRooms] = useState<Room[]>([]);
  const bookingSectionRef = useRef<HTMLDivElement>(null);
  const [showBooking, setShowBooking] = useState(false);
  const [isBookingMode, setIsBookingMode] = useState(false);

  useEffect(() => {
    if (id) {
      const hotelReviews = getHotelReviews(id);
      setReviews(hotelReviews);
      const rooms = getRoomsByHotelId(id);
      setHotelRooms(rooms);
    }
  }, [id]);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !rating || !comment.trim()) return;

    setIsSubmitting(true);
    try {
      const newReview = addReview({
        hotelId: id,
        rating,
        comment: comment.trim(),
        photo: photo || undefined,
        userName: "Anonymous User",
      });
      setReviews([...reviews, newReview]);
      setRating(0);
      setComment("");
      setPhoto(null);
      // Reset file input
      const fileInput = document.getElementById("photo-input") as HTMLInputElement;
      if (fileInput) fileInput.value = "";
    } catch (error) {
      console.error("Error submitting review:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Hotel not found</h2>
          <Button onClick={() => navigate("/")}>Go Back</Button>
        </div>
      </div>
    );
  }

  // Generate date options for Check In and Check Out
  const generateDateOptions = (startDays: number = 0, count: number = 7) => {
    const options = [];
    const today = new Date();
    for (let i = startDays; i < startDays + count; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      options.push({
        value: date.toISOString().split("T")[0],
        label: date.toLocaleDateString("en-US", {
          weekday: "short",
          day: "numeric",
          month: "short",
        }),
        fullDate: date.toLocaleDateString("en-US", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      });
    }
    return options;
  };

  const checkInOptions = generateDateOptions(0, 7);
  const checkOutOptions = generateDateOptions(
    checkIn ? Math.ceil((new Date(checkIn).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) + 1 : 1,
    7
  );

  useEffect(() => {
    if (checkInOptions.length > 0 && !checkIn) {
      setCheckIn(checkInOptions[0].value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (checkOutOptions.length > 0 && checkIn && !checkOut) {
      // Set check out to be at least 1 day after check in
      const checkInDate = new Date(checkIn);
      const minCheckOut = new Date(checkInDate);
      minCheckOut.setDate(checkInDate.getDate() + 1);
      const minCheckOutStr = minCheckOut.toISOString().split("T")[0];
      const availableOption = checkOutOptions.find((opt) => opt.value >= minCheckOutStr);
      if (availableOption) {
        setCheckOut(availableOption.value);
      }
    }
  }, [checkIn]);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !checkIn || !checkOut || !hotel) return;
    
    // Open guests modal instead of submitting directly
    setShowGuestsModal(true);
  };

  const handleFinalBooking = () => {
    if (!id || !checkIn || !checkOut || !hotel) return;

    setIsBookingSubmitting(true);
    try {
      const nights = calculateNights(checkIn, checkOut);
      const totalPrice = (hotel.price || 0) * nights;

      addBooking({
        hotelId: id,
        hotelName: hotel.name,
        checkIn,
        checkOut,
        note: note.trim() || undefined,
        price: totalPrice,
        adults,
        children,
        infants,
      });

      alert("Booking submitted successfully!");
      setShowGuestsModal(false);
      setIsBooking(false);
      setNote("");
      setAdults(1);
      setChildren(0);
      setInfants(0);
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Error submitting booking. Please try again.");
    } finally {
      setIsBookingSubmitting(false);
    }
  };

  const incrementAdults = () => setAdults((prev) => prev + 1);
  const decrementAdults = () => setAdults((prev) => Math.max(1, prev - 1));
  const incrementChildren = () => setChildren((prev) => prev + 1);
  const decrementChildren = () => setChildren((prev) => Math.max(0, prev - 1));
  const incrementInfants = () => setInfants((prev) => prev + 1);
  const decrementInfants = () => setInfants((prev) => Math.max(0, prev - 1));

  const mainImage = hotel.gallery?.[selectedImage] || hotel.image;
  const galleryImages = hotel.gallery || [hotel.image];
  const averageRating = reviews.length > 0 ? getAverageRating(id!) : hotel.rating;
  const totalReviews = reviews.length + (hotel.reviews || 0);
  const nights = checkIn && checkOut ? calculateNights(checkIn, checkOut) : 0;
  const totalPrice = (hotel.price || 0) * nights;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors mb-4"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>

        {/* Back to Details Button - Only shown in booking mode */}
        {isBookingMode && (
          <button
            onClick={() => {
              setIsBookingMode(false);
              setShowBooking(false);
            }}
            className="mb-4 flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Details</span>
          </button>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Section - Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden mb-4">
              <img
                src={mainImage}
                alt={hotel.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-2 overflow-x-auto mb-4">
              {galleryImages.slice(0, 5).map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer border-2 ${
                    selectedImage === index ? "border-blue-500" : "border-transparent"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${hotel.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              {galleryImages.length > 5 && (
                <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border-2 border-gray-300 flex items-center justify-center bg-gray-100 cursor-pointer">
                  <span className="text-sm font-semibold text-gray-600">
                    +{galleryImages.length - 5}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right Section - Hotel Details or Booking */}
          <div>
            {/* Book Hotel Section - Shown when Book Now is clicked */}
            {isBookingMode ? (
              <div ref={bookingSectionRef}>
                <h3 className="font-semibold text-lg mb-4">Book Hotel</h3>

                {/* Check In */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check In</label>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {checkInOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setCheckIn(option.value)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                          checkIn === option.value
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Check Out */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check Out</label>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {checkOutOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setCheckOut(option.value)}
                        disabled={checkIn && option.value <= checkIn}
                        className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                          checkOut === option.value
                            ? "bg-blue-600 text-white"
                            : checkIn && option.value <= checkIn
                            ? "bg-gray-50 text-gray-400 cursor-not-allowed"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Note To Owner */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Note To Owner</label>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Enter here"
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                {/* Price and Submit Button */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Price per night:</span>
                    <span className="text-gray-800 font-semibold">
                      ${hotel.price || 0}.00
                    </span>
                  </div>
                  {nights > 0 && (
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Nights:</span>
                      <span className="text-gray-800 font-semibold">{nights}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center border-t pt-2">
                    <span className="text-gray-800 font-semibold">Total price:</span>
                    <span className="text-blue-600 font-bold text-xl">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>

                <Button
                  onClick={handleBookingSubmit}
                  disabled={!checkIn || !checkOut || isBookingSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isBookingSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="mb-4">
                <div className="flex items-start gap-3 mb-2">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {hotel.discount}% Off
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{averageRating.toFixed(1)}</span>
                    <span className="text-gray-600">
                      ({totalReviews} Reviews)
                    </span>
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{hotel.name}</h1>
                <div className="flex items-center gap-1 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{hotel.address || hotel.location}</span>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-4 border-b mb-4">
                {(["About", "Gallery", "Review"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-2 px-1 font-medium transition-colors ${
                      activeTab === tab
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

            {/* Key Features */}
            <div className="flex gap-6 mb-6">
              {hotel.beds && (
                <div className="flex items-center gap-2">
                  <Bed className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">{hotel.beds} Beds</span>
                </div>
              )}
              {hotel.baths && (
                <div className="flex items-center gap-2">
                  <Bath className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">{hotel.baths} Bath</span>
                </div>
              )}
              {hotel.sqft && (
                <div className="flex items-center gap-2">
                  <Square className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">{hotel.sqft.toLocaleString()} Sqft</span>
                </div>
              )}
            </div>

            {/* Gallery Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-lg">Gallery ({galleryImages.length})</h3>
                <button className="flex items-center gap-1 text-blue-600 hover:underline text-sm">
                  <Camera className="w-4 h-4" />
                  Add Photo
                </button>
              </div>
            </div>

            {/* Price and Book Now Button */}
            <div className="mb-6 border-t pt-4">
              <div className="mb-4">
                <span className="text-gray-600">Total price: </span>
                <span className="text-blue-600 font-bold text-xl">
                  ${hotel.price || 0}.00/night
                </span>
              </div>
              <Button
                onClick={() => {
                  setIsBookingMode(true);
                  setShowBooking(true);
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
              >
                Book Now
              </Button>
            </div>

            {/* Description */}
            {activeTab === "About" && (
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">
                  {hotel.description || "No description available."}
                  <button className="text-blue-600 hover:underline ml-1">
                    Read More
                  </button>
                </p>
              </div>
            )}

            {activeTab === "Gallery" && (
              <div className="grid grid-cols-2 gap-2 mb-6">
                {galleryImages.map((img, index) => (
                  <div
                    key={index}
                    className="relative w-full h-32 rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={img}
                      alt={`${hotel.name} gallery ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {activeTab === "Review" && (
              <div className="mb-6 space-y-6">
                {/* Review Form */}
                <div className="border rounded-lg p-4 bg-gray-50">
                  <h3 className="font-semibold text-lg mb-4">Your Overall Rating Of This Product</h3>
                  
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`w-6 h-6 transition-colors ${
                            star <= (hoveredRating || rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  <h4 className="font-medium mb-2">Add detailed review</h4>
                  
                  <form onSubmit={handleSubmitReview} className="space-y-4">
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Enter here"
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      required
                    />

                    {/* Photo Upload */}
                    <div>
                      <label
                        htmlFor="photo-input"
                        className="flex items-center gap-2 text-blue-600 hover:underline cursor-pointer text-sm"
                      >
                        <Camera className="w-4 h-4" />
                        Add Photo
                      </label>
                      <input
                        id="photo-input"
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoChange}
                        className="hidden"
                      />
                      {photo && (
                        <div className="mt-2 relative w-24 h-24 rounded-lg overflow-hidden">
                          <img src={photo} alt="Review photo" className="w-full h-full object-cover" />
                          <button
                            type="button"
                            onClick={() => setPhoto(null)}
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                          >
                            ×
                          </button>
                        </div>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={!rating || !comment.trim() || isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </form>
                </div>

                {/* Existing Reviews */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">All Reviews ({reviews.length})</h3>
                  {reviews.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">No reviews yet. Be the first to review!</p>
                  ) : (
                    <div className="space-y-4">
                      {reviews
                        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                        .map((review) => (
                          <div key={review.id} className="border rounded-lg p-4">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <div className="flex gap-1">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                      key={star}
                                      className={`w-4 h-4 ${
                                        star <= review.rating
                                          ? "fill-yellow-400 text-yellow-400"
                                          : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-600">
                                  {review.userName || "Anonymous"}
                                </span>
                              </div>
                              <span className="text-xs text-gray-500">
                                {new Date(review.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                            <p className="text-gray-700 mb-2">{review.comment}</p>
                            {review.photo && (
                              <div className="mt-2 w-32 h-32 rounded-lg overflow-hidden">
                                <img
                                  src={review.photo}
                                  alt="Review photo"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Available Rooms Section */}
        {hotelRooms.length > 0 && (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Available Rooms</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {hotelRooms.map((room) => (
                <Card
                  key={room.id}
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{room.name}</h3>
                    <p className="text-sm text-gray-600">
                      From{" "}
                      <span className="text-blue-600 font-semibold">
                        {room.price}$
                      </span>{" "}
                      Per Night
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Guests Selection Modal */}
      {showGuestsModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-out">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 transform transition-all duration-300 ease-out scale-95 opacity-0 animate-modal-in">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Select Guests</h3>

            {/* Adults */}
            <div className="mb-6">
              <div className="mb-2">
                <label className="text-base font-medium text-gray-900">Adults</label>
                <p className="text-sm text-gray-500">Ages 18 Or Above</p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={decrementAdults}
                  disabled={adults <= 1}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  −
                </button>
                <input
                  type="number"
                  value={adults}
                  readOnly
                  className="w-16 text-center text-lg font-semibold text-gray-900 border-none focus:outline-none"
                />
                <button
                  onClick={incrementAdults}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Children */}
            <div className="mb-6">
              <div className="mb-2">
                <label className="text-base font-medium text-gray-900">Children</label>
                <p className="text-sm text-gray-500">Ages 2-17</p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={decrementChildren}
                  disabled={children <= 0}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  −
                </button>
                <input
                  type="number"
                  value={children}
                  readOnly
                  className="w-16 text-center text-lg font-semibold text-gray-900 border-none focus:outline-none"
                />
                <button
                  onClick={incrementChildren}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Infants */}
            <div className="mb-6">
              <div className="mb-2">
                <label className="text-base font-medium text-gray-900">Infants</label>
                <p className="text-sm text-gray-500">Under Ages 2</p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={decrementInfants}
                  disabled={infants <= 0}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  −
                </button>
                <input
                  type="number"
                  value={infants}
                  readOnly
                  className="w-16 text-center text-lg font-semibold text-gray-900 border-none focus:outline-none"
                />
                <button
                  onClick={incrementInfants}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Book Now Button */}
            <Button
              onClick={handleFinalBooking}
              disabled={isBookingSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isBookingSubmitting ? "Booking..." : "Book Now"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

