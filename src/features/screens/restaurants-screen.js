import { StatusBar, SafeAreaView, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { RestaurantInfoCard } from '../restaurants/restaurant-info-card'
import styled from 'styled-components/native'

const SafeAreaViewContainer = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`
const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`
// const isAndroid = Platform.OS === 'android';

export const RestaurantScreen = () => {
  // const styles = StyleSheet.create({
  //   card: {},
  // })

  return (
    <SafeAreaViewContainer>
      <SearchContainer>
        <Searchbar placeholder="Search"></Searchbar>
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeAreaViewContainer>
  )
}
