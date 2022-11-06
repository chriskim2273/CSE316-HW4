import { useContext } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 100,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MUIRemoveSongModal() {
    const { store } = useContext(GlobalStoreContext);

    function handleConfirmRemoveSong() {
        store.addRemoveSongTransaction();
    }

    function handleCancelRemoveSong() {
        store.hideModals();
    }

    let modalClass = "modal";
    if (store.isRemoveSongModalOpen()) {
        modalClass += " is-visible";
    }
    let songTitle = "";
    if (store.currentSong) {
        songTitle = store.currentSong.title;
    }

    return (
        <Modal
            open={store.currentSong != null}//store.listMarkedForDeletion !== null}
        >
            <Box sx={style}>
                <div
                    id="remove-song-modal"
                    className={modalClass}
                    data-animation="slideInOutLeft">
                    <div className="modal-root" id='verify-remove-song-root'>
                        <div className="modal-north">
                            Remove {songTitle}?
                        </div>
                        <div className="modal-center">
                            <Alert severity="warning" className="modal-center-content">
                                Are you sure you wish to permanently remove {songTitle} from the playlist?
                            </Alert>
                        </div>
                        <div className="modal-south">
                            <input type="button"
                                id="remove-song-confirm-button"
                                className="modal-button"
                                onClick={handleConfirmRemoveSong}
                                value='Confirm' />
                            <input
                                type="button"
                                id="remove-song-cancel-button"
                                className="modal-button"
                                onClick={handleCancelRemoveSong}
                                value='Cancel' />
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
    );
}