import {View, Text, TextInput, Button} from 'react-native';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';

export default function ReactFormComponent() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = () => {};
  return (
    <View className="flex flex-col w-full justify-center items-center">
      <Controller
        control={control}
        name="firstName"
        render={({field: {value, onChange, onBlur}}) => (
          <TextInput
            className="w-[80%] h-10 bg-slate-400 border rounded-lg"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
        rules={{
          required: true,
          validate: () => {
            return true;
          },
        }}
      />
      {errors.firstName && (
        <Text className="text-red-500">This is Required</Text>
      )}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
