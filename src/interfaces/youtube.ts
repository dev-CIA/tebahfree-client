export type PlayListItems = {
  kind: string
  etag: string
  id: string
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: {
      [key in 'default' | 'medium' | 'high' | 'standard' | 'maxres']: {
        url: string
        width: number
        height: number
      }
    }
    channelTitle: string
    videoOwnerChannelTitle?: string
    videoOwnerChannelId?: string
    playlistId?: string
    position: number
    resourceId?: {
      kind: string
      videoId: string
    }
  }
  contentDetails?: {
    videoId: string
    note: string
    videoPublishedAt: string
  }
  status?: {
    privacyStatus: string
  }
}
