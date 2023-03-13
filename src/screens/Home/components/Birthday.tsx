import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Birthday = ({ name, photo, date, days, onPress }: any ) => {
	let bDay = new Date(date)

	return <TouchableOpacity 
			style={styles.card}
			onPress={onPress}
		>
		<Image source={{uri: photo}} style={styles.photo} accessibilityLabel={name} />
		<View style={styles.info}>
			<View>
				<Text style={styles.name}>{ name }</Text>
				<Text style={styles.date}>{ `${bDay.getUTCDate().toString().padStart(2, "0")}/${(bDay.getUTCMonth() + 1).toString().padStart(2, "0")}/${bDay.getFullYear()}` }</Text>
			</View>
		</View>
		{days == 0
			? <Image source={require('../../../assets/images/bDay.png')} style={styles.birthToday} />
			: days > 0 
				? <View style={styles.bDay}>
						<Text style={styles.bDay_number}>{days}</Text>
						<Text style={styles.bDay_text}>Dias</Text>
					</View>
				: <View style={styles.bDay}>
					<Text style={styles.bDay_number_negative}>{Math.abs(days)}</Text>
					<Text style={styles.bDay_text_negative}>Dias atras</Text>
				</View>
		}
	</TouchableOpacity>
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#F6F6F6',
		marginVertical: 8,
		marginHorizontal: 16,
		borderRadius: 6,
		flexDirection: "row",

		// Android
		elevation: 4,

		// iOS
		shadowColor: '#000',
		shadowOffset: {
				width: 0,
				height: 2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,
	},
	photo: {
		width: 48,
		height: 48,
		borderRadius: 6,
		marginVertical: 16,
		marginLeft: 16,
	},
	birthToday: {
		width: 48,
		height: 48,
		// borderRadius: 6,
		marginVertical: 16,
		marginRight: 20,
	},
	info: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginLeft: 8,
		marginVertical: 16,
		marginRight: 16,
	},
	name: {
		fontSize: 14,
		lineHeight: 22,
		fontWeight: 'bold',
	},
	date: {
		fontSize: 12,
		lineHeight: 19,
	},
	bDay: {
		flexDirection: 'column',
		alignItems: 'center',
		marginVertical: 16,
		marginRight: 16,
	},
	bDay_number: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#0095ff',
		marginRight: 16,
	},
	bDay_text: {
		fontSize: 16,
		color: '#0095ff',
		marginRight: 16,
	},
	bDay_number_negative: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#ff7b7b',
		marginRight: 2,
	},
	bDay_text_negative: {
		fontSize: 16,
		color: '#ff5252',
		marginRight: 2,
	}
});

export default Birthday;