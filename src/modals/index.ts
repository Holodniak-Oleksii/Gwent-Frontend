import { EModalKey } from "@/common/types";
import { ConfirmDuel } from "@/modals/ConfirmDuel/ConfirmDuel";
import NiceModal from "@ebay/nice-modal-react";

export interface IModalProps {
  id: EModalKey;
}

NiceModal.register(EModalKey.CONFIRM_DUEL, ConfirmDuel);
