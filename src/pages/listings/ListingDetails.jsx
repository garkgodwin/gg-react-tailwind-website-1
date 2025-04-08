import { useParams, useNavigate } from 'react-router';
import placeholder from '../../assets/sample_listing.png';
import { listings } from '../../data';

const ListingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const listing = listings.find((item) => item.id.toString() === id);

  if (!listing) {
    return (
      <div className="max-w-screen-md mx-auto py-20 px-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Listing not found</h2>
        <button
          className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition"
          onClick={() => navigate('/')}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-screen-lg mx-auto grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div>
          <img
            src={listing.imageUrl}
            alt={listing.title || 'Listing image'}
            onError={(e) => {
              e.currentTarget.src = placeholder;
            }}
            className="w-full h-96 object-cover rounded-xl shadow"
          />
        </div>

        {/* Basic Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{listing.title}</h1>
          <p className="text-gray-500 text-sm mb-1">{listing.location}</p>

          <p className="text-gray-600 text-sm mb-4">
            {listing.bedrooms} beds &bull; {listing.bathrooms} baths &bull;{' '}
            {listing.sqft.toLocaleString()} sqft
          </p>

          <p className="text-lg text-gray-700 mb-6">{listing.description}</p>

          <div className="text-2xl text-teal-600 font-bold mb-6">{listing.price}</div>

          <button
            onClick={() => navigate(-1)}
            className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition"
          >
            Back to Listings
          </button>
        </div>
      </div>

      {/* Property Info Card */}
      <div className="max-w-screen-lg mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-700">
        <div className="bg-gray-50 p-4 rounded-lg border">
          <p className="font-medium text-gray-500">Property Type</p>
          <p>{listing.propertyType}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border">
          <p className="font-medium text-gray-500">Year Built</p>
          <p>{listing.yearBuilt}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border">
          <p className="font-medium text-gray-500">Lot Size</p>
          <p>{listing.lotSize}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border">
          <p className="font-medium text-gray-500">Garage</p>
          <p>{listing.garage}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border">
          <p className="font-medium text-gray-500">Bedrooms</p>
          <p>{listing.bedrooms}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border">
          <p className="font-medium text-gray-500">Bathrooms</p>
          <p>{listing.bathrooms}</p>
        </div>
      </div>

      {/* Highlights */}
      {listing.features?.length > 0 && (
        <div className="max-w-screen-lg mx-auto mt-12">
          <h3 className="text-xl font-semibold mb-4">Highlights</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            {listing.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default ListingDetails;
