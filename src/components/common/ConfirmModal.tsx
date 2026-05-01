"use client";

import { useEffect, useRef } from "react";
import { useAppContext } from "@/contexts/AppContext";
import { PBtn } from "./PBtn";
import styles from "./ConfirmModal.module.scss";

export function ConfirmModal() {
  const { confirm, confirmMessage, confirmAction, closeConfirm } =
    useAppContext();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (confirm && !dlg.open) dlg.showModal();
    else if (!confirm && dlg.open) dlg.close();
  }, [confirm]);

  const handleYes = async () => {
    await confirmAction();
    closeConfirm();
  };

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      onClose={closeConfirm}
      aria-label="Confirmation"
    >
      <div className={styles.message}>
        <h3>{confirmMessage}</h3>
      </div>
      <PBtn className={styles.close} labelText="X" onClick={closeConfirm} />
      <PBtn className={styles.yes} labelText="YES" onClick={handleYes} />
      <PBtn className={styles.no} labelText="NO" onClick={closeConfirm} />
    </dialog>
  );
}
