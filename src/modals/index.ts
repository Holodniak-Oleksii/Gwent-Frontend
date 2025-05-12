import { EModalKey } from "@/common/types";
import { ApplyCard } from "@/modals/ApplyCard";
import { ConfirmDuel } from "@/modals/ConfirmDuel/ConfirmDuel";
import { EditAvatar } from "@/modals/EditAvatar/EditAvatar";
import { ResurrectCard } from "@/modals/ResurrectCard";
import NiceModal from "@ebay/nice-modal-react";

export interface IModalProps {
  id: EModalKey;
}

NiceModal.register(EModalKey.CONFIRM_DUEL, ConfirmDuel);
NiceModal.register(EModalKey.AVATAR_EDIT, EditAvatar);
NiceModal.register(EModalKey.APPLY_CARD, ApplyCard);
NiceModal.register(EModalKey.RESURRECT, ResurrectCard);
