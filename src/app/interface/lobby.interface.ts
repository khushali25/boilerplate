export interface Lobby {
  id?: number;
  sport?: string;
  title?: string;
  type?: string;
  entryFee?: string;
  prizePool?: string;
  enteredEntry?: string;
  maxEntry?: string;
  regDeadline?: string | Date;
}
