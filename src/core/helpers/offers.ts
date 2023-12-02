import { Offer } from '../../types/offer.type.js';
import { City } from '../../types/city.type.js';
import { Housing } from '../../types/housing.type.js';
import { Facility } from '../../types/facility.type.js';
import { UserType } from '../../types/user.type.js';

export function createOffer(offer: string): Offer {
  const offerRow = offer.replace('\n', '').split('\t');
  const [name,
    description,
    publicationDate,
    city,
    previewImage,
    images,
    premium,
    favorite,
    rating,
    housingType,
    roomCount,
    guestCount,
    cost,
    facilities,
    offerAuthorName,
    offerAuthorAvatar,
    offerAuthorType,
    offerAuthorEmail,
    commentsCount,
    latitude,
    longitude] = offerRow;

  return {
    name: name,
    description: description,
    publicationDate: new Date(publicationDate),
    city: city as unknown as City,
    previewImage: previewImage,
    images: images.split(','),
    premium: premium as unknown as boolean,
    favorite: favorite as unknown as boolean,
    rating: parseFloat(rating),
    housingType: housingType as unknown as Housing,
    roomCount: parseInt(roomCount, 10),
    guestCount: parseInt(guestCount, 10),
    cost: parseInt(cost, 10),
    facilities: facilities.split(',').map((x) => x as unknown as Facility),
    author: {
      name: offerAuthorName,
      avatarPath: offerAuthorAvatar,
      type: offerAuthorType as unknown as UserType,
      email: offerAuthorEmail,
    },
    commentsCount: parseInt(commentsCount, 10),
    coordinates: { latitude: parseFloat(latitude), longitude: parseFloat(longitude) }
  };
}
