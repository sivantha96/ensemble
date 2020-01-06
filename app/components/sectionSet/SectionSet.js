import React, { Component } from 'react'
import { 
    Text, 
    TextInput,
    StyleSheet, 
    View, 
    Image,
    StatusBar,
    Button,
    SectionList,
    TouchableOpacity,
} from 'react-native'

class SectionSet extends Set {
    constructor(arr) {
        super(arr)
        this.originalArray = arr
    }

    toArray(val) {
        return Array.from(this)
    }

    reset() {
        return new SectionSet(this.originalArray)
    }
}