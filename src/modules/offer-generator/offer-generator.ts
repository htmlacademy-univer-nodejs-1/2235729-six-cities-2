import dayjs from 'dayjs';
import { MockData } from '../../types/mock-data.type.js';
import { OfferGeneratorInterface } from './offer-generator.interface.js';
import { City } from '../../types/city.type.js';
import { Housing } from '../../types/housing.type.js';
import { UserType } from '../../types/user.type.js';
import { CityCoordinates } from '../../data/city.js';
import { Facility } from '../../types/facility.type.js';

function generateRandomValue(min: number, max: number) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function getRandomItems(items: unknown[]) {
  const from = generateRandomValue(0, items.length - 1);
  const to = from + 1 + generateRandomValue(from, items.length);
  return items.slice(from, to);
}

function getRandomItem(items: unknown[]) {
  return items[generateRandomValue(0, items.length - 1)];
}

export default class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) {
  }

  public generate(): string {
    const name = getRandomItem(this.mockData.names);
    const description = getRandomItem(this.mockData.descriptions);
    const publicationDate = dayjs().subtract(generateRandomValue(1, 7), 'day').toISOString();
    const city = getRandomItem([City.Amsterdam, City.Cologne, City.Brussels, City.Paris, City.Hamburg, City.Dusseldorf]);
    const previewImage = getRandomItem(this.mockData.previewImages);
    const images = getRandomItems(this.mockData.propertyImages);
    const premium = getRandomItem(['true', 'false']);
    const favorite = getRandomItem(['true', 'false']);
    const rating = generateRandomValue(1, 5);
    const housingType = getRandomItem([Housing.House, Housing.Hotel, Housing.Room, Housing.Apartment]);
    const roomCount = generateRandomValue(1, 3);
    const guestCount = generateRandomValue(1, 10);
    const cost = generateRandomValue(10000, 100000);
    const facilities = getRandomItems([Facility.AirConditioning, Facility.BabySeat, Facility.Fridge]);
    const offerAuthorName = getRandomItem(this.mockData.users.names);
    const offerAuthorAvatar = getRandomItem(this.mockData.users.avatars);
    const offerAuthorType = getRandomItem([UserType.Pro, UserType.Usual]);
    const offerAuthorNameEmail = getRandomItem(this.mockData.users.emails);
    const commentsCount = generateRandomValue(1, 10000);
    const cityCoordinates = CityCoordinates[city as City];
    const latitude = cityCoordinates.latitude + Number(getRandomItem(this.mockData.coordinates.latitude));
    const longitude = cityCoordinates.longitude + Number(getRandomItem(this.mockData.coordinates.longitude));

    return [
      name, description, publicationDate,
      city, previewImage, images, premium,
      favorite, rating, housingType, roomCount,
      guestCount, cost, facilities, offerAuthorName,
      offerAuthorAvatar, offerAuthorType, offerAuthorNameEmail,
      commentsCount, latitude, longitude
    ].join('\t');
  }
}
