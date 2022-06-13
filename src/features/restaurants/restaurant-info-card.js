import React from 'react'
import { SvgXml } from 'react-native-svg'
import { Text } from '../../components/typography/text.component'
import star from '../../../assets/star'
import open from '../../../assets/open'
import { Spacer } from '../../components/spacer/spacer.component'
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from '../../components/restaurant-info-card.styles'

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.ocregister.com/wp-content/uploads/2019/10/OCR-L-HondaFood-1003-01-LO-1.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant

  const ratingArray = Array.from(new Array(Math.floor(rating)))

  return (
    <RestaurantCard>
      <RestaurantCardCover
        key={name}
        source={{ uri: photos[0] }}
      ></RestaurantCardCover>
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
              <Spacer position="left" size="large">
                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>
              <Spacer position="left" size="large">
                <Icon source={{ uri: icon }} />
              </Spacer>
            </SectionEnd>
          </Rating>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  )
}
