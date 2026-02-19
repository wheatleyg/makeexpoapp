import { useState } from 'react';
import {
  Avatar,
  Button,
  Card,
  Sheet,
  Text,
  Theme,
  XStack,
  YStack,
} from 'tamagui';

export default function ProfileScreen() {
  const [open, setOpen] = useState(false)
  return (
    <Theme name="light">
      <YStack
        flex={1}
        padding="$4"
        gap="$4"
        backgroundColor="$gray2"
      >
        {/* Profile Header Card */}
        <Card
          elevation="$2"
          padding="$4"
          borderRadius="$6"
          backgroundColor="$background"
        >
          <XStack alignItems="center" gap="$4">
            <Avatar circular size="$6">
              <Avatar.Image src="https://placehold.co/400x400/blue/white?text=Placeholder\n400x400" />
              <Avatar.Fallback backgroundColor="$gray6" />
            </Avatar>
            <YStack>
              <Text fontSize="$6" fontWeight="700">
                MK
              </Text>
              <Text fontSize="$3" color="$gray10">
                Software Engineer
              </Text>
            </YStack>
          </XStack>
        </Card>
        {/* About Card */}
        <Card
          borderWidth={1}
          borderColor="$gray6"
          padding="$4"
          gap="$3"
          backgroundColor="$background"
        >
          <Text fontSize="$5" fontWeight="600">
            About
          </Text>
          <Text fontSize="$3" color="$gray11">
            A vibrant example UI built with Tamagui primitives,
            tokens, and compile-time styling.
          </Text>
        </Card>
        {/* Stats Card */}
        <Card
          borderWidth={1}
          borderColor="$gray6"
          padding="$4"
          backgroundColor="$background"
        >
          <XStack justifyContent="space-between">
            <Stat label="Articles" value="26" />
            <Stat label="Followers" value="1.5k" />
            <Stat label="Likes" value="12k" />
          </XStack>
        </Card>
        {/* Action Button */}
        <Button
          size="$4"
          backgroundColor="$blue9"
          marginTop="$4"
          pressStyle={{ opacity: 0.85 }}
          onPress={() => setOpen(true)}
        >
          <Button.Text>Actions</Button.Text>
        </Button>
        {/* Bottom Sheet */}
        <Sheet
          modal
          open={open}
          onOpenChange={setOpen}
          snapPoints={[35]}
          dismissOnSnapToBottom
        >
          <Sheet.Overlay />
          <Sheet.Handle />
          <Sheet.Frame padding="$4" gap="$3">
            <Text fontSize="$5" fontWeight="600">
              Actions
            </Text>
            <Button theme="active">
              Follow
            </Button>
            <Button variant="outlined">
              Message
            </Button>
            <Button
              chromeless
              onPress={() => setOpen(false)}
            >
              <Button.Text color="$red10">Close</Button.Text>
            </Button>
          </Sheet.Frame>
        </Sheet>
      </YStack>
    </Theme>
  )
}
// Helper Component for Stats Display
function Stat({ label, value }: { label: string; value: string }) {
  return (
    <YStack alignItems="center">
      <Text fontSize="$6" fontWeight="700">
        {value}
      </Text>
      <Text fontSize="$2" color="$gray10">
        {label}
      </Text>
    </YStack>
  )
}